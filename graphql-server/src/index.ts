import { loadFilesSync } from "@graphql-tools/load-files"
import { mergeResolvers, mergeTypeDefs } from "@graphql-tools/merge"
import { ApolloServer } from "apollo-server"
import path from "path"

//schemaのマージ
const typeDefsArray = loadFilesSync(path.join(__dirname, "graphql/schema"))
const typeDefs = mergeTypeDefs(typeDefsArray)

//resolversのマージ
const resolversArray = loadFilesSync(path.join(__dirname, "graphql/resolvers"))
const resolvers = mergeResolvers(resolversArray)

const server = new ApolloServer({
  typeDefs,
  resolvers,
})

server.listen().then(({ url }) => {
  console.log(`server ready at ${url}`)
})
