import React from 'react'
import { useState, useEffect } from 'react';

export default ( {recipeList} ) => {
  const [recipe, setRecipe] = useState([])

  // fetch single recipe by id
  const recipeId = "63d34e3990fc119d29605ece"

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