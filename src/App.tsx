import "./App.css";
import PostList from "./components/ui/react-query/PostList";

function App() {
  return (
    <>
      <div className="min-h-screen bg-background">
        {/* Header */}
        <header className="bg-primary text-primary-foreground py-6 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-3xl font-bold text-balance">Blog Posts</h1>
            <p className="mt-2 text-primary-foreground/80">
              Discover and filter blog posts by author
            </p>
          </div>
        </header>
        <div className="flex min-h-svh flex-col">
          <PostList />
        </div>
      </div>
    </>
  );
}

export default App;
