import { useMutation } from "@apollo/client"
import type { Task } from "../graphql/generated/graphql"
import { GET_TASKS, UPDATE_TASK } from "../graphql/queries"

export const TaskItem = ({ task }: { task: Task }) => {
  const [updateTask] = useMutation(UPDATE_TASK)
  const handleToggleCompleted = async (task: Task) => {
    await updateTask({
      variables: { id: task.id, completed: !task.completed },
      refetchQueries: [{ query: GET_TASKS }],
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
