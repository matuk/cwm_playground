import useTodos from "./hooks/useTodos";
import TodoCard from "./TodoCard";

const TodoList = () => {
  const { data: todos, error, isLoading } = useTodos();

  if (isLoading) return <p>Is loading ...</p>;
  if (error) return <p>{error.message}</p>;

  return (
    <div className="container mx-auto pt-4 px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {todos?.map((todo) => (
          <TodoCard key={todo.id} todo={todo} />
        ))}
      </div>
    </div>
  );
};

export default TodoList;
