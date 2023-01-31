import React, { useState } from 'react'
import Comment from './Comment'
import CommentForm from './CommentForm'

export default ({ recipeComments, loggedInUser }) => {
  console.log(recipeComments)

  const [comments, setComments] = useState(recipeComments)

  const addComment = (newComment) => {
    // Comment is added with 'User' placeholder name
    setComments([...comments, { username: loggedInUser, date: new Date(), comment: newComment }])
  }

  return (
    <div className='container row justify-content-md-center mx-auto'>
      <div className='col-12 col-lg-10'>
        <CommentForm addComment={addComment} />
        <Comment comments={comments} />
      </div>
    </div>
  )
}