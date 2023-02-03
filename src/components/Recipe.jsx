import React,{useEffect} from 'react'
import { useParams } from 'react-router-dom'
import CommentSection from './CommentSection'
import RecipeDescription from './RecipeDescription'
import RecipeIngredients from './RecipeIngredients'
import RecipeMethod from './RecipeMethod'
import RecipeMenu from './RecipeMenu'
import RecipeTags from './RecipeTags'

export default ({ recipeList, loggedInUser }) => {
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
      <RecipeMenu recipe={recipe} loggedInUser={loggedInUser}/>
      <RecipeDescription recipeDescription={recipe.description} />
      <RecipeIngredients recipeIngredients={recipe.ingredients} />
      <RecipeMethod recipeMethod={recipe.method} />
      <RecipeTags recipeTags={recipe.tags} />
      <CommentSection recipe={recipe} />
    </div>
  )
}