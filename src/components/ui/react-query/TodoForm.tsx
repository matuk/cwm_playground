import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { AlertCircleIcon } from "lucide-react";
import { useRef } from "react";
import { Alert, AlertTitle } from "../alert";
import useAddTodo from "./hooks/useAddTodo";

const TodoForm = () => {
  const ref = useRef<HTMLInputElement>(null);
  const addTodo = useAddTodo(() => {
    if (ref.current) ref.current.value = "";
  });
  return (
    <div className="container mx-auto pt-4 px-4 sm:px-6 lg:px-8">
      {addTodo.error && (
        <Alert variant="destructive" className="mb-3">
          <AlertCircleIcon />
          <AlertTitle>{addTodo.error.message}</AlertTitle>
        </Alert>
      )}
      <form
        className="flex flex-col sm:flex-row gap-3"
        onSubmit={(event) => {
          event.preventDefault();
          if (ref.current && ref.current.value)
            addTodo.mutate({
              id: 0,
              title: ref.current?.value,
              completed: false,
              userId: 1,
            });
        }}
      >
        <Input ref={ref} className="sm:flex-1" />
        <Button className="sm:shrink-0">Add</Button>
      </form>
    </div>
  );
};

export default TodoForm;
