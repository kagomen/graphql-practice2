## メモ

- vscode に入れた拡張機能

  - GraphQL: Language Feature Support

- graphql-tools

  - ファイル分割した schema と resolver 関数をマージするライブラリ
  - 開発環境では graphql-tools によってマージされたものを apollo server の引数に渡すことができるが、ビルド時は.graphql ファイルが dist にコンパイルされないため、src/schema から cp する必要がある（今回は build script に記述）
  - 設定ファイルは codegen.yml

- graphql-codegen
  - .graphql ファイルに記述した schema から型を自動生成するライブラリ
  - 生成されたコードが export する Resolvers を resolve 関数に型として指定すると、引数の型定義を自分でしないで済む
  - フロントで使うデータ取得用コードを生成することも可能
