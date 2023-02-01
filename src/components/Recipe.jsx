import React from 'react'
import { useParams } from 'react-router-dom'
import CommentSection from './CommentSection'
import Description from './Description'
import Ingredients from './Ingredients'
import Method from './Method'
import RecipeMenu from './RecipeMenu'

export default ({ recipeList, loggedInUser  }) => {

  const { recipeId } = useParams()
  const recipe = recipeList[recipeId]
  
  if (!recipe) {
    return (
      <div className='container'>
        <br />
        <h3>
          Loading recipe...
        </h3>
        <br />
      </div>
    )
  }

  return (
		<div className="h-100 d-flex flex-column align-items-center justify-content-center m-5">
      <RecipeMenu recipe={recipe} loggedInUser={loggedInUser} />
      <Description recipeDescription={recipe.description} />
      <Ingredients recipeIngredients={recipe.ingredients} />
      <Method recipeMethod={recipe.method} />
      <CommentSection recipe={recipe} loggedInUser={loggedInUser} />
    </div>
  )
}