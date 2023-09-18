import Link from 'next/link'

export default function Navbar() {
  return (
    <div className="container mx-auto px-4 md:px-6">
      <nav className="flex items-center justify-between">

        <div className="text-2xl font-bold">News Site</div>

        <div className="space-x-4">
          <Link className="text-zinc-900 hover:text-zinc-700" href="#">
            Home
          </Link>
          <Link className="text-zinc-900 hover:text-zinc-700" href="#">
            Politics
          </Link>
          <Link className="text-zinc-900 hover:text-zinc-700" href="#">
            Business
          </Link>
          <Link className="text-zinc-900 hover:text-zinc-700" href="#">
            Tech
          </Link>
          <Link className="text-zinc-900 hover:text-zinc-700" href="#">
            Culture
          </Link>
          <Link className="text-zinc-900 hover:text-zinc-700" href="#">
            Sports
          </Link>
        </div>
      </nav>
    </div>

      )
}
