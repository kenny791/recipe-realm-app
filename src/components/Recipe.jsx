import React from 'react'
import CommentSection from './CommentSection'
import Description from './Description'
import Ingredients from './Ingredients'
import Method from './Method'
import RecipeMenu from './RecipeMenu'

export default () => {
  return (
    <div className='container'>
      <RecipeMenu />
      <Description />
      <Ingredients />
      <Method />
      <CommentSection />
    </div>
  )
}