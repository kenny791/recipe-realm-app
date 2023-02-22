import React from 'react'

export default ({recipeIngredients}) => {

  const ingredients = recipeIngredients.map((ingredient, index) => {
    return <li key={index}>{ingredient}</li>
  })

  return (
    <div className='container row justify-content-md-center mx-auto mb-3'>
      <div className='col-12 col-lg-10'>
        <h3>Ingredients</h3>
          <ul>
            {ingredients}
          </ul>
      </div>
    </div>
  )
}
