import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../select";
import usePosts from "./hooks/usePosts";
import Postcard from "./Postcard";

const PostList = () => {
  const [selectedUserId, setSelectedUserId] = useState<string>();
  const {
    data: posts,
    error,
    isLoading,
  } = usePosts(selectedUserId ? parseInt(selectedUserId) : undefined);

  if (isLoading) return <p>Is loading ...</p>;
  if (error) return <p>{error.message}</p>;

  return (
    <>
      {/* Filter Section */}
      <div className="bg-card border-b border-border py-4 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4">
            <label
              htmlFor="user-filter"
              className="text-sm font-medium text-foreground"
            >
              Filter by Author:
            </label>
            <Select value={selectedUserId} onValueChange={setSelectedUserId}>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Select an author" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Authors</SelectItem>
                <SelectItem key={1} value="1">
                  User 1
                </SelectItem>
                <SelectItem key={2} value="2">
                  User 2
                </SelectItem>
                <SelectItem key={3} value="3">
                  User 3
                </SelectItem>
              </SelectContent>
            </Select>
            {posts && (
              <span className="text-sm text-muted-foreground">
                {posts.length} post{posts.length !== 1 ? "s" : ""} found
              </span>
            )}
          </div>
        </div>
      </div>

      <div className="container mx-auto pt-4 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {posts?.map((post) => (
            <Postcard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </>
  );
};

export default PostList;
