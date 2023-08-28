import { NextResponse } from "next/server";

export async function GET(req: { url: string | URL; } , {params}: {params: {userId: string}} ){
    const { searchParams } = new URL(req.url);
    console.log(searchParams.get('name'));
    console.log(searchParams.get('lastname'));
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`);
    const data = await res.json()
    
    return NextResponse.json(data);
}