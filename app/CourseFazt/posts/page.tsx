import PostCard from "@/components/PostCard/PostCard";
import { PostProps } from "@/types/PostProps.type";

export async function getPosts(id?: string) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id ? id : ""}`);
  const data = await res.json();

  await new Promise((resolve) =>  setTimeout(resolve, 2000))    

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
