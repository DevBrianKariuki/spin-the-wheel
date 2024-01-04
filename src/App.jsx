import React from 'react'
import Layout from './layout/Layout'
import { Home, Profile, Notifications, NotFound, Login, Register, Verify, Game } from './pages'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={ <Layout /> }>
      <Route index element={<Home/>}/>
      <Route path='profile' element={<Profile/>}/>
      <Route path='notifications' element={<Notifications/>}/>
      <Route path='login' element={<Login/>}/>
      <Route path='register' element={<Register/>}/>
      <Route path='verify' element={<Verify/>}/>
      <Route path='game' element={<Game/>}/>

      <Route path='*' element={<NotFound />} />
    </Route>
  )
)

function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App
