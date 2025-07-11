import { gql, useQuery } from "@apollo/client"
import type { Task } from "./graphql/generated/graphql"

function App() {
  const GET_TASKS = gql`
    query FetchAllTasks {
      getTasks {
        id
        title
        completed
      }
    }
  `

  const { loading, error, data } = useQuery(GET_TASKS)

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error.message}</p>

  return (
    <div>
      <form action="">
        <input type="text" placeholder="Add Task" />
        <button>+</button>
      </form>
      <ul>
        {data?.getTasks.map((task: Task) => (
          <li key={task.id}>
            <input type="checkbox" checked={task.completed} />
            {task.title}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
