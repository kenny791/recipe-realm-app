import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import User from './User'
import Recipe from './Recipe'
import Navbar from './Navbar'
import Search from './Search'
import ApiTest from './ApiTest'

export default function App() {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/search' element={<Search />} />
      <Route path='/user' element={<User />} />
      <Route path='/recipe' element={<Recipe />} />
      <Route path='/apitest' element={<ApiTest />} />
      <Route path='*' element={<div className='container'><h3>Page not found!</h3></div>} />
    </Routes>
    </>
  )
}