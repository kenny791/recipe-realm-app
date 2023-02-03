import React, { useState } from 'react'

export default ({recipeRating, recipe, loggedInUser }) => {

  const averageRating = Math.round(recipeRating.reduce((acc, curr) => acc + curr.rating, 0) / recipeRating.length)
  const recipeId = recipe._id

  const [rating, setRating] = useState(averageRating)

  const handleClick = (event) => {
    const list = event.target.parentNode.children
    const index = Array.from(list).indexOf(event.target)
    setRating(index + 1)
    updateRatings(index + 1)
  }

  const updateRatings = async (rating) => {
    const res = await fetch(`https://server-production-6a0e.up.railway.app/recipes/edit/${recipeId}`,
    {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        rating_list: [...recipe.rating_list,
          {username: loggedInUser, rating: rating}]
      })
    })
    const data = await res.json()
    console.log(data)
  }

  function updateState() {
    const newRecipeList = JSON.parse(JSON.stringify(recipeList))
    const indexToEdit = newRecipeList.findIndex((recipe) => recipe.id == recipeId)
    const oldRecipe = newRecipeList[indexToEdit]
    oldRecipe.name = name
    oldRecipe.description = description
    oldRecipe.tags = splitBySemicolon(tags)
    oldRecipe.image = image
    oldRecipe.ingredients = splitBySemicolon(ingredients)
    oldRecipe.method = splitBySemicolon(method)
    setRecipeList(newRecipeList)
  }

const stars = []
  for (let i = 0; i < 5; i++) {
    if (i < rating) {
      stars.push(<span style={{ cursor: 'pointer'}} key={i} onClick={handleClick}>★️️️️️</span>)
    } else {
      stars.push(<span style={{ cursor: 'pointer'}} key={i} onClick={handleClick}>☆</span>)
    }
  }

  return (
    <div className='container'>
      {stars} 
      <span> | {averageRating}</span>
    </div>
  )
}