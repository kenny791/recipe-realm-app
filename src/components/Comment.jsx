import React from 'react'

export default () => {

  // Declare an array of comments
  const comments = [
    {
      name: 'John Doe',
      comment: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore at quasi modi in deserunt quam, vero corrupti suscipit laborum quos hic aperiam sunt explicabo, consequatur aliquid error quibusdam itaque ducimus.'
    },
    {
      name: 'Jane Doe',
      comment: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore at quasi modi in deserunt quam, vero corrupti suscipit laborum quos hic aperiam sunt explicabo, consequatur aliquid error quibusdam itaque ducimus.'
    },
    {
      name: 'John Smith',
      comment: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore at quasi modi in deserunt quam, vero corrupti suscipit laborum quos hic aperiam sunt explicabo, consequatur aliquid error quibusdam itaque ducimus.'
    },
    {
      name: 'Jane Smith',
      comment: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore at quasi modi in deserunt quam, vero corrupti suscipit laborum quos hic aperiam sunt explicabo, consequatur aliquid error quibusdam itaque ducimus.'
    },
    {
      name: 'John Doe',
      comment: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore at quasi modi in deserunt quam, vero corrupti suscipit laborum quos hic aperiam sunt explicabo, consequatur aliquid error quibusdam itaque ducimus.'
    }
  ]

  const commentHeader = comments.length === 1 ? '1 Comment' : `${comments.length} Comments`

  // Map the array of comments to a div with a h6 with the name and p with comment
  const commentsList = comments.map((comment, index) => {
    return (
      <div className='row' key={index}>
        <div className='col-2'>
          <h6>{comment.name}</h6>
        </div>
        <div className='col-8'>
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
