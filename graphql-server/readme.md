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

- prisma

  - `npx prisma init --datasource-provider <provider name>`
  - `npx prisma migrate dev --name <migration file name>`

- 各ツールについて
  - graphql
    - サバクラ間でデータをやり取りするためのクエリ言語。API のルールを定義
    - BE: データ・クエリ・ミューテーションのスキーマを定義
    - FE: クエリ・ミューテーションを定義
  - apollo server
    - BE 用ライブラリ
    - リゾルバ（レスポンス処理）の定義
    - graphql リクエストを受け付けるためのサーバープロセスを構築・起動
  - apollo client
    - FE で動作する状態管理ライブラリ
    - useQuery, useMutation で API リクエスト送信
    - キャッシュ管理
  - codegen
    - cli ツール
    - graphql スキーマに対応する型定義を生成
    - apollo client の hook をラップした型安全な custom hook を生成
