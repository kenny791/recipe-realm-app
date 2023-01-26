import React from 'react'
import Comment from './Comment'
import CommentForm from './CommentForm'

export default () => {
  return (
    <div className='container'>
      <CommentForm />
      <Comment />
    </div>
  )
}