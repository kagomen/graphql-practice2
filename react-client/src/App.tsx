import { gql, useMutation, useQuery } from "@apollo/client"
import { useState } from "react"
import { type Task } from "./graphql/generated/graphql"

function App() {
  const GET_TASKS = gql`
    query getTasks {
      getTasks {
        id
        title
        completed
      }
    }
  `

  const ADD_TASK = gql`
    mutation addTask($title: String!) {
      addTask(title: $title) {
        id
        title
        completed
      }
    }
  `

  const UPDATE_TASK = gql`
    mutation updateTask($id: ID!, $completed: Boolean) {
      updateTask(id: $id, completed: $completed) {
        id
        completed
      }
    }
  `

  const { loading, error, data } = useQuery(GET_TASKS)

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

  const [updateTask] = useMutation(UPDATE_TASK)
  const handleUpdateTask = async (task: Task) => {
    await updateTask({
      variables: { id: task.id, completed: !task.completed },
      refetchQueries: [{ query: GET_TASKS }],
    })
  }

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error.message}</p>

  return (
    <div>
      <form onSubmit={handleAddTask}>
        <input
          type="text"
          placeholder="Add Task"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button type="submit">+</button>
      </form>
      <ul>
        {data?.getTasks.map((task: Task) => (
          <li key={task.id}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => handleUpdateTask(task)}
            />
            {task.title}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
