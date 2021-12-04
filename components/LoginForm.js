import React from "react";
import { useAuth } from '../contexts/auth'
import Footer from '../components/Footer'

export default function LoginForm() {
  const { login } = useAuth();
  let loginHudler = (e) => {
    e.preventDefault()
    let username = e.target.username.value;
    let password = e.target.password.value;
    login(username, password)
  }

  return (
    <div className="items-center justify-center px-20 text-center 	;">
      <form onSubmit={loginHudler} className='p-4 m-8 bg-green-300 border-4 border-green-700 border-solid rounded-md ' >
      <div className="w-100">
        <label className="w-1/3 ">
          USERNAME 
        </label >
        </div>
        <div className="w-100">
        <input
          name="username" placeholder=" username" className="w-2/3 m-3 bg-gray-100 " min="0" required />
        </div>
        <div  className="w-100">
        <div className="w-100">
        <label className="w-1/3 ">
          PASSWORD 
        </label>
        </div>
        <input name="password" placeholder=" password" type="password" className="w-2/3 m-3 bg-gray-100 " min="0" required />
          </div>
        <button className="p-1 px-2 m-3 bg-green-500 text-black-50" type='submit' > Sign in</button>
      
      </form>
      
  
    </div>

  );
}