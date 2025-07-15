import { useUpdateTaskMutation, type Task } from "../graphql/generated"

export const TaskItem = ({ task }: { task: Task }) => {
  const [updateTask] = useUpdateTaskMutation({
    //楽観的レスポンス
    optimisticResponse: {
      updateTask: {
        __typename: "Task",
        id: task.id,
        completed: !task.completed,
      },
    },
  })
  const handleToggleCompleted = async (task: Task) => {
    await updateTask({
      variables: { id: task.id, completed: !task.completed },
    })
  }
  return (
    <li>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => handleToggleCompleted(task)}
      />
      {task.title}
    </li>
  )
}
