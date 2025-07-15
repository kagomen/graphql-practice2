import { TaskForm } from "./components/TaskForm"
import { TaskList } from "./components/TaskList"
import { useGetTasksQuery } from "./graphql/generated"

function App() {
  const { loading, error, data } = useGetTasksQuery()

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error.message}</p>

  return (
    <div>
      <TaskForm />
      <TaskList tasks={data?.getTasks ?? []} />
    </div>
  )
}

export default App
