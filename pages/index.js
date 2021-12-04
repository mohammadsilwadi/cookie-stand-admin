import Head from 'next/head'
import React, { useState } from 'react'
import CookieStandeAdmin from '../components/CookieStandeAdmin'
import LoginForm from '../components/LoginForm'
import { useAuth } from '../contexts/auth'
import useResource from '../hooks/useResource'
import axios from 'axios'
import useSWR from 'swr'

export default function Home() {
  const { user } = useAuth();


  return (
    <div >

      
  {user ?
    < CookieStandeAdmin/> 
    : < LoginForm/>
   }
      
    </div>
  )
}





