import React,{useEffect} from 'react'
import { useParams } from 'react-router-dom'
import CommentSection from './CommentSection'
import Description from './Description'
import Ingredients from './Ingredients'
import Method from './Method'
import RecipeMenu from './RecipeMenu'

export default ({ recipeList, loggedInUser  }) => {
  // Scroll to top on page load
  useEffect(() => {setTimeout(() => {window.scrollTo(0, 0)}, 0)}, [])

  const { recipeId } = useParams()
  // Find recipe by id rather than indexing recipeId in case of deleted recipes (then recipeId will not match with id)
  const index = recipeList.findIndex(recipe => recipe.id == recipeId)
  const recipe = recipeList[index]
  
  if (!recipe) {
    return (
      <div className='container'>
        <br />
        <h3>
          This recipe does not seem to exist...
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