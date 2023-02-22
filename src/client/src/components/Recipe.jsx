import React, { useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'
import RecipeContext from '../context'
import CommentSection from './CommentSection'
import RecipeDescription from './RecipeDescription'
import RecipeIngredients from './RecipeIngredients'
import RecipeMethod from './RecipeMethod'
import RecipeMenu from './RecipeMenu'
import RecipeTags from './RecipeTags'
import LoadingPage from './LoadingPage'

export default () => {
  // Scroll to top on page load
  useEffect(() => {setTimeout(() => {window.scrollTo(0, 0)}, 0)}, [])

  const { recipeList } = useContext(RecipeContext)

  const { recipeId } = useParams()
  // Find recipe by id rather than indexing recipeId in case of deleted recipes (then recipeId will not match with id)
  const index = recipeList.findIndex(recipe => recipe.id == recipeId)
  const recipe = recipeList[index]
  
  if (recipeList.length === 0) {
    return (
      <LoadingPage />
    )
  }

  if (recipeList.length !== 0 && !recipe) {
    return (
      <>
        <div className="mh-100 d-flex justify-content-center align-items-center m-5 p-5" style={{height: "80vh"}}>
          <h3>This recipe does not exist</h3>
        </div>
      </>
    )
  }

  return (
		<div className="h-100 d-flex flex-column align-items-center justify-content-center m-5">
      <RecipeMenu recipe={recipe} />
      <RecipeDescription recipeDescription={recipe.description} />
      <RecipeIngredients recipeIngredients={recipe.ingredients} />
      <RecipeMethod recipeMethod={recipe.method} />
      <RecipeTags recipeTags={recipe.tags} />
      <CommentSection recipe={recipe} />
    </div>
  )
}