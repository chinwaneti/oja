import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from './NavBar'

export default function RouteLayout() {
   
  return (
    <div>
    <NavBar />
    <main>
    <Outlet />
    </main>
    </div>
  )
}
