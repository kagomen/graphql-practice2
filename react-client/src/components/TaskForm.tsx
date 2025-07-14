import { useMutation } from "@apollo/client"
import { useState } from "react"
import { ADD_TASK, GET_TASKS } from "../graphql/queries"

export const TaskForm = () => {
  const [addTask] = useMutation(ADD_TASK)
  const [title, setTitle] = useState("")

  const handleAddTask = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!title.trim()) return

    await addTask({
      variables: { title },
      refetchQueries: [{ query: GET_TASKS }],
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
      <button type="submit">+</button>
    </form>
  )
}
