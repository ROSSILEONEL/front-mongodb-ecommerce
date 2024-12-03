import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import { EjemploComponent } from './components/EjemploComponent.tsx'
import { NavBar } from './components/NavBar.tsx'
import { Productos } from './components/Productos.tsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router  >
      <QueryClientProvider client={queryClient}>
      <NavBar />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/ejemplo" element={<EjemploComponent />} />
        <Route path="/products" element={<Productos />} />
      </Routes>
      </QueryClientProvider >
    </Router>
  </StrictMode>,
    )
