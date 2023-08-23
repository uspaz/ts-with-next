import type { Metadata } from 'next'
import ExampleChilds from "./ChildrenProps/page";
import CourseFazt from "./CourseFazt/page";
import Events from "./EventsInNext/page";
import Props from "./Props/page";
import StateWithTs from "./StateWithTs/page";
import UseContextExample from "./UseContextExample/page";
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Home page"
}  
export default function Home() {

  return (
    <div className='mt-10 ml-10'>
      <ul className='flex flex-col gap-5'>
        <li>
          <Link href="">Props</Link>
        </li>
        <li>
          <Link href="">Childrens</Link>
        </li>
        <li>
          <Link href="">Eventos</Link>
        </li>
        <li>
          <Link href="">Estado</Link>
        </li>
        <li>
          <Link href="">Context</Link>
        </li>
        <li>
          <Link href="">Curso Fazt</Link>
        </li>
      </ul>
    </div>
  )
}
