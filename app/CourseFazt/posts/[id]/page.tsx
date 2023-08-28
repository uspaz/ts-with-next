import PostCard from "@/components/PostCard/PostCard";
import Posts, { getPosts } from "../page";
import { Suspense } from "react";
import Loading from "./loading";


export default async function Page({ params }: { params: { id: string } } ) {
    const post = await getPosts(params.id);
    
    return (
    <div>
        <PostCard {...post} />
        <br />
        <hr />
        <Suspense fallback={<Loading />}>
          <Posts />
        </Suspense>
    </div>
  )
}
