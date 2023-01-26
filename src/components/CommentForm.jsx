import React from 'react'

export default () => {
  return (
    <div className='container'>
      <div className='row justify-content-md-center'>
        <div className='col-12'>
      <h3 id='comment-anchor'>Comment</h3>
        </div>
      </div>
      <div className='row justify-content-md-center'>
        <div className='col-12'>
          <input type="text" className="form-control" id="floatingInput" />
        </div>
      </div>
      <div className='row justify-content-md-center'>
        <div className='col-12'>
          <button type="button" className="btn btn-secondary" data-bs-toggle="button" autoComplete="off">Publish</button>
        </div>
      </div>
    </div>
  )
}
