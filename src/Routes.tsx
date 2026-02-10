import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Principal from './pages/Principal'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/principal" element={<Principal />} />
  </Routes>
)

export default Rotas
