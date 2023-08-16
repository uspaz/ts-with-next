import { PostProps } from "@/types/PostProps.type";

export default function PostCard({title, body}: PostProps) {
  return (
    <div className="w-[350px]">
        <h3 className="text-center text-red-600 text-lg capitalize">{title}</h3>
        <p>{body}</p>
    </div>
  )
}
