import Link from 'next/link'
export default function Header() {
    return (
        <header className="flex items-center justify-between p-7 bg-green-500" >
        <h1 className="text-2xl">Cookie Stand Admin</h1>
        <Link href='/overview' > 
        <button className='bg-gray-400 m-4 rounded-lg p-2 font-bold self-end '>overview</button>
       </Link>
      </header>
    )
}