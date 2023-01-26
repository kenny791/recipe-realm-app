import React from 'react'
import { useState, useEffect } from 'react';

export default () => {
  const [recipeList, setRecipeList] = useState([])
  const [recipe, setRecipe] = useState([])

// fetch all recipes
  useEffect(() => {
    async function getRecipeList() {
      const res = await fetch(`https://server-production-6a0e.up.railway.app/recipes/`)
      const data = await res.json()
      setRecipeList(data) 
    }
    getRecipeList()
  }, [])
  
  

// fetch single recipe by id
  const recipeId = "63d263abdd9f43e17b72cf5e"

  useEffect(() => {
    async function getRecipe() {
      const res = await fetch(`https://server-production-6a0e.up.railway.app/recipes/${recipeId}`)
      const data = await res.json()
      setRecipe(data) 
    }
    getRecipe()
  }, [])



  return (
    <>
      <h1>list of all recipes</h1>

        {recipeList.map((recipe) => {
          return (
            <div>
              <img src={recipe.image} alt={recipe.name} />
              <p>{recipe.name}</p>
            </div>
          )
        })}
        <br />
        <br />
        <h1>single recipe</h1>
        <h2>name: {recipe.name}</h2>
        <img src={recipe.image} alt={recipe.name} />
        <h2>author:</h2>
        <p>{recipe.username}</p>
        <h2>ingredients</h2>
        <p>{recipe.ingredients}</p>
    </>
)
}