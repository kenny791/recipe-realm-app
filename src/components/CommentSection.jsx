import React, { useState } from 'react'
import Comment from './Comment'
import CommentForm from './CommentForm'

export default () => {
  const [comments, setComments] = useState([])

  const addComment = (newComment) => {
    // Comment is added with 'User' placeholder name
    setComments([...comments, { name: 'User', comment: newComment }])
  }

  return (
    <div className='container'>
      <CommentForm addComment={addComment} />
      <Comment comments={comments} />
    </div>
  )
}