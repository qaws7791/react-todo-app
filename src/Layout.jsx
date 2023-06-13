import React from 'react'
import './Layout.css'
import { Header } from './components'
const Layout = ({ children }) => {
  return (
    <div className='layout'>
      <Header title="TODO LIST" subTitle="BY REACT"/>
        <main>
        { children }
        </main>
    </div>
  )
}

export default Layout