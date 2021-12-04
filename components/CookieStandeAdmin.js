import Head from "next/head";
import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";
import React from 'react'

export default function CookieStandeAdmin() {
    return (
        <div>
        <Head>
        <title>Cookie Stand Admin</title>
        <link rel="icon" href="/favicon.ico" />
        </Head>
          <Header />
          <Main  />
       <Footer />
  
      </div>
    )
}
