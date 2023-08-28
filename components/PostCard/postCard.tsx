"use client";
import { PostProps } from "@/types/PostProps.type";
import Link from "next/link";

export default function PostCard({ ...post }: PostProps) {
  const handleDelete = (id: number) => {
    console.log(`delete post with id: ${id}`);
  };

  const { id, title, body } = post;
  return (
    <div className="w-[350px]">
      <Link href={`posts/${id}`}>
        <h3 className="text-center text-red-600 whitespace-normal text-lg capitalize">{title}</h3>
      </Link>
      <p>{body}</p>
      <button className="border w-[200px] py-2 mt-2 rounded-md bg-blue-500 text-white" onClick={() => handleDelete(id)}>
        delete post
      </button>
    </div>
  );
}
