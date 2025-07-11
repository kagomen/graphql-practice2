interface Task {
  id: string
  title: string
  completed: boolean
}

function App() {
  const tasks: Task[] = [
    { id: "1", title: "掃除", completed: false },
    { id: "2", title: "洗濯", completed: false },
  ]
  return (
    <div>
      <form action="">
        <input type="text" placeholder="Add Task" />
        <button>+</button>
      </form>
      <ul>
        {tasks.map((task) => (
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
