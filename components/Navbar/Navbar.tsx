import Link from "next/link";

function Navbar() {
  return (
    <nav className="w-full flex justify-center my-10">
      <ul className="flex gap-5">
        <li>
          <Link href="/">Inicio</Link>
        </li>
        <li>
          <Link href="/props">Props</Link>
        </li>
        <li>
          <Link href="/childrenprops">Childrens</Link>
        </li>
        <li>
          <Link href="/events">Eventos</Link>
        </li>
        <li>
          <Link href="/statewithts">Estado</Link>
        </li>
        <li>
          <Link href="/usecontextexamp">Context</Link>
        </li>
        <li>
          <Link href="/coursefazt">Curso Fazt</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
