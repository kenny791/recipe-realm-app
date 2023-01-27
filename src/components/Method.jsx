import React from 'react'


export default () => {

  // Declare an array of steps in a recipe's method
  const steps = [
    'Prepare ingredients',
    'Mix ingredients',
    'Bake for 30 minutes',
    'Serve'
  ]

  // Map the array of steps to a list of <li> elements
  const stepsList = steps.map((step, index) => {
    return <li key={index}>{step}</li>
  })

  return (
    <div className='container row justify-content-md-center'>
      <div className='col-12'>
        <h3>Method</h3>
        <ol>
          {stepsList}
        </ol>
      </div>
    </div>
  )
}
