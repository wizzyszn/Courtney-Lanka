import React, { useContext } from 'react'
import NavBar from '../Components/NavBar'
import Header from '../Components/Header'
import Body from '../Components/Body'
import Footer from '../Components/Footer'
import NavBarExtension from '../Components/NavBarExtension'
import { Context } from '../contexts/AppContext'

export default function Home() {
  const {toggle} = useContext(Context)
  return (
    <>
    <NavBar />
    {
      toggle && (  <NavBarExtension />)
    }
    <Header />
    <Body />
    <Footer />
    </>
  )
}
