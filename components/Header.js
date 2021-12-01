import Link from 'next/link'
export default function Header() {
    return (
        <header className="flex items-center justify-between bg-green-500 p-7" >
        <h1 className="text-2xl">Cookie Stand Admin</h1>
        
        <Link href='/overview' > 
        <button className='self-end p-2 m-4 font-bold bg-gray-400 rounded-lg '>overview</button>
       </Link>
      </header>
    )
}