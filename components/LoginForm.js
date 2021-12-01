import React from "react";
import { useAuth } from '../contexts/auth'
export default function LoginForm() {
    const { user, login } = useAuth();
    let loginHudler=(e)=>{
        e.preventDefault()
       let user={
       username:e.target.username.value,
       password:e.target.password.value,
        }
        login(user.username,user.password)
      }
  return (
    <div className="w-3/5 m-48 p-">
      <form  onSubmit={loginHudler} className='p-4 m-8 bg-green-300 rounded-md' >
        <label className="content-center ">
          USERNAME :{" "}
        </label>
        <input
          name="username"
          placeholder=" username"
          className="w-2/3 m-3 bg-gray-100"
          min="0"
        ></input>
        <br />
        <label className="content-center mx-2 ">
        PASSWORD :{" "}
        </label>
        <input
          name="password"
          placeholder=" password"
          type="password"
          className="w-2/3 m-3 bg-gray-100"
          min="0"
        ></input>
        <button className="p-1 px-2 m-3 bg-green-500 text-black-50"type='submit' > Sign in</button>
      </form>
    </div>
  );
}