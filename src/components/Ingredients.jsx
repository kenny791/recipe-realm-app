import React from 'react'

export default () => {

  // Declare an array of ingredients in a recipe
  const ingredients = [
    '1 cup of flour',
    '1 cup of sugar',
    '1 cup of milk',
    '1 cup of butter'
  ]

  // Map the array of ingredients to a list of <li> elements
  const ingredientsList = ingredients.map((ingredient, index) => {
    return <li key={index}>{ingredient}</li>
  })

  return (
    <div className='container row justify-content-md-center mx-auto'>
      <div className='col-12 col-lg-10'>
        <h3>Ingredients</h3>
          <ul>
            {ingredientsList}
          </ul>
      </div>
    </div>
  )
}
