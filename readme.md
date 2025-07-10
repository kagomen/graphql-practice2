## メモ

- 開発環境では graphql-tools によってパスが解決されるので問題なく apollo server が立ち上がるが、ビルド時は.graphql ファイルが dist にコンパイルされないため、src/schema から cp する必要がある
