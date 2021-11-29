import Head from 'next/head'
import { useState } from 'react'

export default function Home() {

  const [cookieStand, set_data] = useState([]);
  function Handler(event) {
    event.preventDefault();

    const save_data = {
      location: event.target.location.value,
      min_customers: event.target.minimum.value,
      max_customers: event.target.Maximum.value,
      avg_cookies: event.target.avgCustomers.value,

    }
    set_data(cookieStand => [...cookieStand, save_data])

  }
  return (
    <div className="">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="py-5 bg-green-700" >
        <h1 className="text-2xl">Cookie Stand Admin</h1>
      </header>
      <main className="items-center justify-center px-20 text-center ">
        <form onSubmit={Handler} className="m-8 p-4 bg-green-300 rounded-md" >
          <h2 className="text-center text-2xl">Cookie Stand Admin  </h2>
          <div className="w-100">
            <label className=" w-1/3"> Location </label>
            <input className="bg-gray-100 m-3 w-2/3" name="location" type="text" />
          </div>
          <div className="flex items-stretch">
            <div className="m-3 p-4 ">
              <label className=" m-3 "> Minimum Customer pre Hour  </label>
              <input className="bg-gray-100 m-3 w-2/3" name="minimum" type="number" />
            </div>

            <div className="m-3 p-4 ">
              <label className=" m-3 "> Maximum Customer pre Hour </label>
              <input className="bg-gray-100 m-3 w-2/3" name="Maximum" type="number" />
            </div>
            <div className="m-3 p-4 ">
              <label className=" m-3 "> Average Cookies pre sale  </label>
              <input className="bg-gray-100 m-3 w-2/3" name="avgCustomers" type="number" />
            </div>

            <button class="bg-green-500 hover:bg-green-400 text-white font-bold h-12 px-4 border-b-4 border-green-700 hover:border-green-500 rounded">
              Create
            </button>
          </div>
        </form>
        <h2 className='text-2xl'>
          Report Table Coming Soon...
        </h2>

        <div className="">
          {
            cookieStand.map(item => {
              return (
                <p class="">{JSON.stringify(item)}</p>
              )
            })
          }
        </div>
      </main>

      <footer className="">
        <p className="bg-green-700" >@2021</p>
      </footer>
    </div>
  )
}





