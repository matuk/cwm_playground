import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../card";
import type { Post } from "./hooks/usePosts";

interface Props {
  post: Post;
}

const Postcard = ({ post }: Props) => {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Blog Post from User 1 {post.userId} </CardTitle>
        <CardDescription>Post Title</CardDescription>
      </CardHeader>
      <CardContent>Post Content</CardContent>
    </Card>
  );
};

export default Postcard;
