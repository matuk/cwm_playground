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
        <CardTitle>Blog Post from User {post.userId} </CardTitle>
        <CardDescription>{post.title}</CardDescription>
      </CardHeader>
      <CardContent>{post.body}</CardContent>
    </Card>
  );
};

export default Postcard;
