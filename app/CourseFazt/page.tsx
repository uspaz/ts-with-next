import type { Metadata } from "next"
import Link from "next/link"
import { roboto } from '../layout'
export const metadata: Metadata = {
    title: "Metadatos en NextJS"
}


export default function CourseFazt() {
  return (
    <div className="ml-6 mt-6">
        <h1 className="text-2xl">Practicando con el curso de fazt</h1>
        <ul className="my-10">
            <li>
                * Probando como funcionan los metadatos
            </li>
            <li>
                * Probando como funcionan las fuentes
            </li>
        </ul>
        <Link className={roboto.className} href='coursefazt/posts'>Posts with server and client components</Link>
    </div>
  )
}
