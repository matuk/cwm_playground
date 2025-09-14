import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../card";
import { Checkbox } from "../checkbox";
import type { Todo } from "./hooks/useTodos";

interface Props {
  todo: Todo;
}

const TodoCard = ({ todo }: Props) => {
  // const statusLabel = todo.completed ? "Completed" : "Open";
  return (
    <Card className="w-full max-w-sm">
      <CardHeader className="space-y-1">
        <div className="flex items-center justify-between gap-3">
          <CardTitle>Todo # {todo.id}</CardTitle>
          <label className="flex items-center gap-2 text-sm text-muted-foreground">
            <Checkbox checked={todo.completed} disabled />
            {todo.completed ? "Completed" : "Open"}
          </label>
        </div>
        <CardDescription>from User {todo.userId}</CardDescription>
      </CardHeader>
      <CardContent>{todo.title}</CardContent>
    </Card>
  );
};

export default TodoCard;
