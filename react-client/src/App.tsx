import { useQuery } from "@apollo/client"
import { TaskForm } from "./components/TaskForm"
import { TaskList } from "./components/TaskList"
import { GET_TASKS } from "./graphql/queries"

function App() {
  const { loading, error, data } = useQuery(GET_TASKS)

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error.message}</p>

  return (
    <div>
      <TaskForm />
      <TaskList tasks={data.getTasks} />
    </div>
  )
}

export default App
