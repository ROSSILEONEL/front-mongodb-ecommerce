import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import { Login } from './components/Login.tsx'
import { NavBar } from './components/NavBar.tsx'
import { Productos } from './components/Productos.tsx'
import { AddAdmin } from './components/AddAdmin.tsx'

import { store } from './app/store.ts'
import { Provider } from 'react-redux'
import { ItemDetail } from './components/ItemDetail.tsx'
import { AdminDashBoard } from './components/AdminDashBoard.tsx'
import { AddProduct } from './components/AddProduct.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
    <Router  >
  
      <NavBar />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<Login />} />
        <Route path="/products" element={<Productos />} />
        <Route path="/products/:id" element={<ItemDetail />} />
        <Route path='/admin' element={<AdminDashBoard />} >
        <Route path='/admin/addUser' element={<AddAdmin/>} />
        <Route path='/admin/addProduct' element={<AddProduct/>} />
        </Route>
      </Routes>

    </Router>
    </Provider>
  </StrictMode>,
    )
