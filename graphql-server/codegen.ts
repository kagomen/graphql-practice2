import type { CodegenConfig } from "@graphql-codegen/cli"

const config: CodegenConfig = {
  // 生成元のschema定義ディレクトリを指定
  schema: "src/graphql/schema/**/*.gql",
  generates: {
    // 生成先のディレクトリを指定
    "src/graphql/generated/graphql.ts": {
      // どの種類の型を生成するか指定
      plugins: ["typescript", "typescript-resolvers"],
    },
  },
}

export default config
