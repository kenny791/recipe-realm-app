import React from 'react'

export default ({recipeTags}) => {
  let tags = Array.from(recipeTags).join(", ")

  return (
    <div className='container row justify-content-md-center mx-auto mb-4'>
      <div className='col-12 col-lg-10'>
        <h3>Tags</h3>
        <p>{tags}</p>
      </div>
    </div>
  )
}
