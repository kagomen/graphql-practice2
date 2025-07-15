import type { CodegenConfig } from "@graphql-codegen/cli"

const config: CodegenConfig = {
  // サーバーからスキーマを取得
  schema: "http://localhost:4000/",
  // クエリやミューテーションを定義しているファイルを指定
  documents: ["src/**/*.gql", "src/**/*.graphql"],
  // 出力先
  generates: {
    "src/graphql/generated.ts": {
      plugins: [
        "typescript", // 1. 基本的なTypeScriptの型を生成
        "typescript-operations", // 2. クエリやミューテーションごとの型を生成
        "typescript-react-apollo", // 3. React Apollo用のカスタムフックを生成
      ],
      config: {
        // TypeScriptの "verbatimModuleSyntax" 設定に対応
        useTypeImports: true,
      },
    },
  },
}

export default config
