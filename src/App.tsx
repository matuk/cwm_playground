import "./App.css";
import { Button } from "./components/ui/button";
import PostList from "./components/ui/react-query/PostList";

function App() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center">
      <h1>Start Project</h1>
      <PostList />
      <Button>Click me</Button>
    </div>
  );
}

export default App;
