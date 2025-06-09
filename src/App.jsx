import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import OrderPage from './pages/OrderPage';
import './App.css'

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/tavolo/1" />} />
        <Route path="/tavolo/:tableId" element={<OrderPage />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
