import usePosts from "./hooks/usePosts";

const PostList = () => {
  const { data: posts, error, isLoading } = usePosts();

  if (isLoading) return <p>Is loading ...</p>;
  if (error) return <p>{error.message}</p>;

  return (
    <ul className="list-group">
      {posts?.map((post) => (
        <li key={post.id}>
          {post.title}, {post.userId}
        </li>
      ))}
    </ul>
  );
};

export default PostList;
