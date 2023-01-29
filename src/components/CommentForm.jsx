import React, { useState } from 'react'

export default ({addComment}) => {

  const [comment, setComment] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    addComment(comment)
    setComment('')
  }
  return (
    <div className='container'>
      <form onSubmit={handleSubmit}>
        <div className='row justify-content-md-center'>
          <div className='col-12'>
            <h3 id='comment-anchor'>Comment</h3>
          </div>
        </div>
        <div className='row justify-content-md-center'>
          <div className='col-12 pb-3'>
            <input type="text" className="form-control" value={comment} onChange={(event) => setComment(event.target.value)} id="floatingInput" />
          </div>
        </div>
        <div className='row justify-content-md-center'>
          <div className='col-12 pb-3'>
            <button type="submit" className="btn btn-secondary" data-bs-toggle="button" autoComplete="off">Publish</button>
          </div>
        </div>
      </form>
    </div>
  )
}
