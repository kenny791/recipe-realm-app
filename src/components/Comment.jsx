import React from 'react'

export default ({ comments }) => {

  const commentHeader = comments.length === 1 ? '1 Comment' : `${comments.length} Comments`

  // Map the array of comments to a div with a h6 with the name and p with comment
  const commentsList = comments.map((comment, index) => {
    return (
      <div className='row' key={index}>
        <div className='col-sm-12 col-md-2'>
          <h6>{comment.name}</h6>
        </div>
        <div className='col-sm-12 col-md-8'>
          <p>{comment.comment}</p>
        </div>
      </div>
    )
  })

  return (
  <div className='row justify-content-md-center'>
    <div className='col'>
    <h4>{commentHeader}</h4>
    </div>
    {commentsList}
  </div>
  )
}
