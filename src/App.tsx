import { useState } from "react";
import "./App.css";
import { Button } from "./components/ui/button";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex min-h-svh flex-col items-center justify-center">
      <h1>Start Project</h1>
      <Button>Click me</Button>
    </div>
  );
}

export default App;
