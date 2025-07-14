import type { Task } from "../graphql/generated/graphql"
import { TaskItem } from "./TaskItem"

export const TaskList = ({ tasks }: { tasks: Task[] }) => {
  return (
    <ul>
      {tasks?.map((task) => (
        <TaskItem task={task} />
      ))}
    </ul>
  )
}
