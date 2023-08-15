import { Outlet } from 'react-router-dom'
import NavBar from './NavBar'
import {Provider} from 'react-redux'
import store from '../store/store'
import React from 'react'

export default function RouteLayout() {
   
  return (
    <div>
    <Provider store={store}>

    <NavBar />

    <main>
    <Outlet />
    </main>
    </Provider>
    </div>
  )
}
