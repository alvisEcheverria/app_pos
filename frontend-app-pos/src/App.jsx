import { useState } from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import Login from './pages/Login'
import ProtectedRoutes from './components/ProtectedRoutes'
import Dashboard from './pages/Dashboard'
import CreateUser from './pages/CreateUser'
import AddProduct from './pages/AddProduct'
import RegisterClient from './pages/RegisterClient'
import NewOrder from './pages/NewOrder'
import Invoice from './pages/Invoice'

function App() {

  return (
    <HashRouter className='content'>
        <Routes>
          <Route path='/' element={<Login/>} />
          <Route element={<ProtectedRoutes/>}>
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/create-user' element={<CreateUser />} />
            <Route path='/add-product' element={<AddProduct />} />
            <Route path='/add-client' element={<RegisterClient />} />
            <Route path='/generate-order' element={<NewOrder />} />
            <Route path='/invoice' element={<Invoice />} />
          </Route>
        </Routes>
    </HashRouter>
  )
}

export default App
