import React from 'react'

export default ({recipeDescription}) => {
  return (
    <div className='container row justify-content-md-center mx-auto'>
      <div className='col-12 col-lg-10'>
        <h3>Description</h3>
        <p>{recipeDescription}</p>
      </div>
    </div>
  )
}
