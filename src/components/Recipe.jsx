import React from 'react'
import CommentSection from './CommentSection'
import Description from './Description'
import Ingredients from './Ingredients'
import Method from './Method'
import RecipeMenu from './RecipeMenu'

export default () => {
  return (
		<div className="h-100 d-flex flex-column align-items-center justify-content-center m-5">
      <RecipeMenu />
      <Description />
      <Ingredients />
      <Method />
      <CommentSection />
    </div>
  )
}