import React, { useState } from 'react'
import Comment from './Comment'
import CommentForm from './CommentForm'

export default ({ recipe, loggedInUser }) => {

  const recipeComments = recipe.comments

  const [comments, setComments] = useState(recipeComments)

  const addComment = (newComment) => {
    const newComments = [...comments, { username: loggedInUser, date: new Date(), comment: newComment }]
    newComments.sort((a, b) => new Date(b.date) - new Date(a.date))
    setComments(newComments)
    updateComments(newComment)
  }

  const updateComments = async (newComment) => {
    const updatedComments = [...recipe.comments, {username: loggedInUser, date: new Date(), comment: newComment}]
    const sortedComments = updatedComments.sort((a, b) => new Date(b.date) - new Date(a.date))

    const res = await fetch(`https://server-production-6a0e.up.railway.app/recipes/edit/${recipe._id}`,
      {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          comments: sortedComments
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