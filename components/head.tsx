import Image from "next/image"
 

export default function Head(){
return(
    <header className="bg-white">
  <div className="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">
    <a className="block decoration-pink-500" href="#">
      <span className="sr-only">Home</span>
      <div >
      <svg xmlns="http://www.w3.org/2000/svg" height="50px" viewBox="0 -960 960 960" width="50px" fill="#ed0763"><path d="m380-300 280-180-280-180v360ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg>
      </div>
    </a>

    <div className="flex flex-1 items-center justify-end md:justify-between">
      <nav aria-label="Global" className="hidden md:block">
        <ul className="flex items-center gap-6 text-sm">
          <li>
            <a className="text-gray-500 transition hover:text-gray-500/75" href="#"> About </a>
          </li>

          <li>
            <a className="text-gray-500 transition hover:text-gray-500/75" href="#"> Careers </a>
          </li>

          <li>
            <a className="text-gray-500 transition hover:text-gray-500/75" href="#"> History </a>
          </li>

          <li>
            <a className="text-gray-500 transition hover:text-gray-500/75" href="#"> Services </a>
          </li>

          <li>
            <a className="text-gray-500 transition hover:text-gray-500/75" href="#"> Projects </a>
          </li>

          <li>
            <a className="text-gray-500 transition hover:text-gray-500/75" href="#"> Blog </a>
          </li>
        </ul>
      </nav>

      <div className="flex items-center gap-4">
        <div className="sm:flex sm:gap-4">
          <a
            className="block rounded-md bg-pink-500 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-pink-700"
            href="/blog/login"
          >
            Login
          </a>

          <a
            className="hidden rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-pink-600 transition hover:text-pink-600/75 sm:block"
            href="/Register"
          >
            Register
          </a>
        </div>

        <button
          className="block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden"
        >
          <span className="sr-only">Toggle menu</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="size-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </div>
  </div>
</header>
)

}