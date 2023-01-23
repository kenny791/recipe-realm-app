import { Route, Routes } from 'react-router-dom'
import Home from './Home.jsx'
import User from './User'
import Recipe from './Recipe'
import Navbar from './Navbar'

export default function App() {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/user' element={<User />} />
      <Route path='/recipe' element={<Recipe />} />
    </Routes>
    </>
  )
}