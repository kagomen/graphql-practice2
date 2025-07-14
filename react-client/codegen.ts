import type { CodegenConfig } from "@graphql-codegen/cli"

const config: CodegenConfig = {
  // サーバーからスキーマを取得
  schema: "http://localhost:4000/",
  // クエリを記述している箇所
  documents: ["src/**/*.tsx", "src/**/*.ts"],
  // 出力先
  generates: {
    "src/graphql/generated/": {
      preset: "client",
      config: {
        // TypeScriptの "verbatimModuleSyntax" 設定に対応
        useTypeImports: true,
      },
    },
  },
}

export default config
