import React from 'react'
import MainNav from '../components/MainNav'
import Footer from '../components/Footer'

export default function layout({children}) {
  return (
    <>
    <MainNav />
    <main>
        {children}
    </main>
    <Footer />
    </>
  )
}
