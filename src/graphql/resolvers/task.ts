import { prisma } from "../../lib/prisma"
import { Resolvers } from "../generated/graphql"

/*
 * resolver(parent, args, context, info)
 *
 * parent: 親リゾルバーの返り値
 * トップレベルMutationやQueryの場合、親は存在しないため、この引数にはサーバー起動時に設定されたrootValueを受け取る
 * ネストしたクエリ（例：Postリゾルバー内のauthorフィールド）の場合、parentにはそのPostオブジェクトを受け取る
 *
 * args: GraphQLクエリで渡された引数が入るオブジェクト
 *
 * context: 全てのリゾルバーで共有されるオブジェクト
 * 認証情報やデータベースの接続情報などを渡すのに使用する
 *
 * info: クエリの実行状態に関する詳細な情報
 */
export const resolvers: Resolvers = {
  Query: {
    getTasks: async () => prisma.task.findMany(),
  },

  Mutation: {
    addTask: async (_, { title }) => {
      return prisma.task.create({
        data: {
          title,
          completed: false,
        },
      })
    },

    updateTask: (_, { id, title, completed }) => {
      return prisma.task.update({
        where: {
          id,
        },
        data: {
          // prisma.task.update()では、
          // dataオブジェクトにundefinedが渡されたフィールドはSQL文に含まれない
          id: title ?? undefined,
          completed: completed ?? undefined,
        },
      })
    },

    deleteTask: async (_, { id }) => {
      return prisma.task.delete({
        where: {
          id,
        },
      })
    },
  },
}
