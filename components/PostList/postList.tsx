import { PostProps } from "@/types/PostProps.type";
import PostCard from "../PostCard/postCard";

const getPosts = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json();
    return data;

}

const PostList = async () => {
    const data: PostProps[] = await getPosts();
    return (
    <>
        <div className="flex flex-wrap gap-12 justify-center mt-10">

        {data.map( (post: PostProps) => (
            <PostCard key={post.id} {...post}/>
        ))}
        </div>

    </>
  )
}

export default PostList;