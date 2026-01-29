package main

import (
	"fmt"
	"os"
	"strings"

	"github.com/github/github-mcp-server/internal/ghmcp"
	"github.com/spf13/cobra"
	"github.com/spf13/viper"
)

var (
	version = "dev"
	rootCmd = &cobra.Command{
		Use:   "github-mcp-server",
		Short: "GitHub MCP Server",
		Long:  "A Model Context Protocol server for GitHub",
	}
)

func init() {
	rootCmd.PersistentFlags().String("host", "", "GitHub Host (e.g. github.com or github.enterprise.com)")
	rootCmd.PersistentFlags().StringSlice("toolsets", []string{"all"}, "Comma-separated list of toolsets to enable")
	rootCmd.PersistentFlags().Bool("dynamic-toolsets", false, "Enable dynamic toolsets")
	rootCmd.PersistentFlags().Bool("read-only", false, "Enable read-only mode")
	rootCmd.PersistentFlags().Bool("export-translations", false, "Export translations")
	rootCmd.PersistentFlags().Bool("log-commands", false, "Enable command logging")
	rootCmd.PersistentFlags().String("log-file", "", "Path to log file")
	rootCmd.PersistentFlags().Int("content-window-size", 5000, "Content window size")

	_ = viper.BindPFlags(rootCmd.PersistentFlags())
	viper.SetEnvPrefix("GITHUB")
	viper.AutomaticEnv()
	viper.SetEnvKeyReplacer(strings.NewReplacer("-", "_"))
}

func main() {
	stdioCmd := &cobra.Command{
		Use:   "stdio",
		Short: "Run the server on stdio",
		RunE: func(cmd *cobra.Command, args []string) error {
			token := os.Getenv("GITHUB_PERSONAL_ACCESS_TOKEN")
			if token == "" {
				return fmt.Errorf("GITHUB_PERSONAL_ACCESS_TOKEN environment variable is required")
			}

			cfg := ghmcp.StdioServerConfig{
				Version:              version,
				Host:                 viper.GetString("host"),
				Token:                token,
				EnabledToolsets:      viper.GetStringSlice("toolsets"),
				DynamicToolsets:      viper.GetBool("dynamic-toolsets"),
				ReadOnly:             viper.GetBool("read-only"),
				ExportTranslations:   viper.GetBool("export-translations"),
				EnableCommandLogging: viper.GetBool("log-commands"),
				LogFilePath:          viper.GetString("log-file"),
				ContentWindowSize:    viper.GetInt("content-window-size"),
			}

			return ghmcp.RunStdioServer(cfg)
		},
	}

	rootCmd.AddCommand(stdioCmd)

	if err := rootCmd.Execute(); err != nil {
		fmt.Fprintln(os.Stderr, err)
		os.Exit(1)
	}
}
