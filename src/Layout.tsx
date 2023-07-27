import React from 'react'
import styles from './Layout.module.css'
import { Header } from './components'

interface LayoutProps {
  children: React.ReactNode
}

const Layout = ({ 
  children 
}:LayoutProps) => {
  return (
    <div className={styles['layout']}>
      <Header title="TODO LIST" subTitle="BY REACT"/>
        <main>
        { children }
        </main>
    </div>
  )
}

export default Layout