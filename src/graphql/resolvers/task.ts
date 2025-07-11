import { tasks } from "../../data/tasks"
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
    getTasks: () => tasks,
  },

  Mutation: {
    addTask: (_, { title }) => {
      const newTask = {
        id: String(tasks.length + 1),
        title: title,
        completed: false,
      }
      tasks.push(newTask)
      return newTask
    },

    updateTask: (_, { id, title, completed }) => {
      const targetTask = tasks.find((task) => task.id === id)
      if (!targetTask) throw new Error("Task is not found")

      targetTask.title = title ?? targetTask.title
      targetTask.completed = completed ?? targetTask.completed

      return targetTask
    },

    deleteTask: (_, { id }) => {
      const targetTaskIndex = tasks.findIndex((task) => task.id === id)
      //findIndex()は対象が見つからなければ-1を返す
      if (targetTaskIndex === -1) throw new Error("Task is not found")

      tasks.splice(targetTaskIndex, 1)
      return true
    },
  },
}
