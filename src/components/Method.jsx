import React from 'react'


export default ({recipeMethod}) => {

  const method = recipeMethod.map((step, index) => {
    return <li key={index}>{step}</li>
  })

  return (
    <div className='container row justify-content-md-center mx-auto mb-3'>
      <div className='col-12 col-lg-10'>
        <h3>Method</h3>
        <ol>
          {method}
        </ol>
      </div>
    </div>
  )
}
