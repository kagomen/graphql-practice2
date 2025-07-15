import { useState } from "react"
import {
  GetTasksDocument,
  useAddTaskMutation,
  type GetTasksQuery,
} from "../graphql/generated"

export const TaskForm = () => {
  const [title, setTitle] = useState("")

  const [addTask, { loading }] = useAddTaskMutation({
    //サーバーへ問い合わせず、ミューテーションの成功結果を使い、ブラウザ内のキャッシュデータを直接書き換え
    update(cache, { data: mutationResult }) {
      if (!mutationResult?.addTask) return

      const newTask = mutationResult.addTask

      const existingData = cache.readQuery<GetTasksQuery>({
        query: GetTasksDocument,
      })

      if (existingData?.getTasks) {
        cache.writeQuery({
          query: GetTasksDocument,
          data: { getTasks: [...existingData.getTasks, newTask] },
        })
      }
    },
  })

  const handleAddTask = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!title.trim()) return

    await addTask({
      variables: { title },
    })

    setTitle("")
  }
  return (
    <form onSubmit={handleAddTask}>
      <input
        type="text"
        placeholder="Add Task"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button type="submit" disabled={loading}>
        +
      </button>
    </form>
  )
}
