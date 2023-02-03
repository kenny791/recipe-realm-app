import React, { useState, useContext } from 'react'
import RecipeContext from '../context'

export default ({recipeRating, recipe, loggedInUser }) => {

  // For updating state with changes
  const { recipeList, setRecipeList } = useContext(RecipeContext)

  const averageRating = Math.round(recipeRating.reduce((acc, curr) => acc + curr.rating, 0) / recipeRating.length)
  const recipeId = recipe._id

  const [rating, setRating] = useState(averageRating)

  const handleClick = (event) => {
    const list = event.target.parentNode.children
    const index = Array.from(list).indexOf(event.target)
    setRating(index + 1)
    updateRatings(index + 1)
    updateState(index +1)
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
  }

  function updateState(review) {
    const newRecipeList = JSON.parse(JSON.stringify(recipeList))
    const indexToEdit = newRecipeList.findIndex((sub) => sub.id == recipe.id)
    const oldRecipe = newRecipeList[indexToEdit]
    const indexToUser = oldRecipe.rating_list.findIndex((rating) => rating.username.username == loggedInUser.username)
    if (indexToUser != -1) {
      oldRecipe.rating_list[indexToUser].rating = review
    } else {
      console.log(oldRecipe.rating_list)
      oldRecipe.rating_list.push({
        username: {
          _id: loggedInUser._id,
          username: loggedInUser.username},
        rating: review
      })
    }
    setRecipeList(newRecipeList)
    // return true
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