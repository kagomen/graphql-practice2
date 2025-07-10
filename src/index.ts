import { loadFilesSync } from "@graphql-tools/load-files"
import { mergeResolvers, mergeTypeDefs } from "@graphql-tools/merge"
import { ApolloServer } from "apollo-server"
import path from "path"

//schema/配下のマージ
const typeDefsArray = loadFilesSync(path.join(__dirname, "schema"), {
  extensions: ["graphql", "gql"],
})
const typeDefs = mergeTypeDefs(typeDefsArray)

//resolvers/配下のマージ
const resolversArray = loadFilesSync(path.join(__dirname, "resolvers"), {
  extensions: ["ts", "js"],
})
const resolvers = mergeResolvers(resolversArray)

const server = new ApolloServer({
  typeDefs,
  resolvers,
})

server.listen().then(({ url }) => {
  console.log(`server ready at ${url}`)
})
