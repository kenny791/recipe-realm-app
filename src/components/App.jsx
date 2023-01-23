import '../App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import User from './User'
import Recipe from './Recipe'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/user' element={<User />} />
      <Route path='/recipe' element={<Recipe />} />
    </Routes>
  )
}

export default App
