import React, { useState } from 'react'
import Comment from './Comment'
import CommentForm from './CommentForm'

export default ({ recipe, loggedInUser }) => {

  const recipeComments = recipe.comments

  const [comments, setComments] = useState(recipeComments)

  const addComment = (newComment) => {
    setComments([...comments, { username: loggedInUser, date: new Date(), comment: newComment }])
    console.log([...comments, { username: loggedInUser, date: new Date(), comment: newComment }])
    updateComments(newComment)
  }

  const updateComments = async (newComment) => {
    const res = await fetch(`https://server-production-6a0e.up.railway.app/recipes/${recipe._id}`,
      {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          comments: [...recipe.comments,
            { username: loggedInUser, date: new Date(), comment: newComment }]
        })
      })
    const data = await res.json()
    console.log(data)
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