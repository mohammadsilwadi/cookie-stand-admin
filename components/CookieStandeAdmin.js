import Head from "next/head";
import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";
import React from 'react'
import useResource from '../hooks/useResource'
export default function CookieStandeAdmin() {
  const { resources, createResource, deleteResource } = useResource();

    return (
        <div className="flex flex-col justify-between h-screen min-h-screen ">
        <Head>
        <title>Cookie Stand Admin</title>
        <link rel="icon" href="/favicon.ico" />
        </Head>
          <Header />
          <Main helo={createResource} />
       <Footer />
  
      </div>
    )
}
