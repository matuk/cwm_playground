import { useRef } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { Todo } from "./hooks/useTodos";
import axios from "axios";
import { Alert, AlertTitle } from "../alert";
import { AlertCircleIcon } from "lucide-react";

const TodoForm = () => {
  const queryClient = useQueryClient();
  const addTodo = useMutation<Todo, Error, Todo>({
    mutationFn: (todo: Todo) =>
      axios
        .post<Todo>("https://jsonplaceholder.typicode.com/todos", todo)
        .then((res) => res.data),
    onSuccess: (savedTodo) => {
      //APPROACH: Invalidating the cache
      //   queryClient.invalidateQueries({
      //     queryKey: ["todos"],
      //   });
      queryClient.setQueryData<Todo[]>(["todos"], (todos) => [
        savedTodo,
        ...(todos || []),
      ]);
      if (ref.current) ref.current.value = "";
    },
  });
  const ref = useRef<HTMLInputElement>(null);
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
        <Button disabled={addTodo.isPending} className="sm:shrink-0">
          {addTodo.isPending ? "Adding..." : "Add"}
        </Button>
      </form>
    </div>
  );
};

export default TodoForm;
