import React, { useState, useEffect } from 'react'
import { Route, Routes, useParams } from 'react-router-dom'
import Home from './Home'
import User from './User'
import Recipe from './Recipe'
import Navbar from './Navbar'
import Search from './Search'
import ApiTest from './ApiTest'
import Footer from './Footer'

export default function App() {
  // stores all recipes
  const [recipeList, setRecipeList] = useState([])
  
  useEffect(() => {
    async function getRecipeList() {
      const res = await fetch(`https://server-production-6a0e.up.railway.app/recipes/`)
      const data = await res.json()
      setRecipeList(data) 
    }
    getRecipeList()
  }, [])
  
  //Search input state  
  const [searchInput, setSearchInput] = useState("")
  
  return (
    <>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home setSearchInput={setSearchInput}/>} />
      <Route path='/search' element={<Search searchInput={searchInput} setSearchInput={setSearchInput}/>} />
      <Route path='/user' element={<User />} />
      <Route path='/recipe' element={<Recipe />} />
      <Route path='/apitest' element={<ApiTest recipeList={recipeList}/>} />
      <Route path='*' element={<div className='container'><h3>Page not found!</h3></div>} />
    </Routes>
    <Footer />
    </>
  )
}