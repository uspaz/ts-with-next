import PostCard from "@/components/PostCard/PostCard";
import { PostProps } from "@/types/PostProps.type";

async function getPosts() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  return data;
}

export default async function Posts() {
  const posts: PostProps[] = await getPosts();

  return (
    <div className="w-full h-full flex flex-wrap justify-center gap-12">
      {posts.map((post: PostProps) => {
        return <PostCard key={post.id} {...post}/>;
      })}
    </div>
  );
}
