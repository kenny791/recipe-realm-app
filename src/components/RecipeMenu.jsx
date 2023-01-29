import React from 'react'
import { Link } from 'react-router-dom'
import Rating from './Rating'

export default () => {
  return (
    <div className='container w-75 mb-3'>
      <div className='row align-items-center justify-content-center'>

        {/* Image column */}
        <div className='text-center col-md-12 col-lg-6 p-3'>
          <img src='https://placekitten.com/g/400/400' className='img-fluid' />
        </div>

        {/* Column with Recipe Name, Author Name, Rating, and Favourite button */}
        <div className='text-center col-md-12 col-lg-6'>
            <h1>Recipe Name</h1>
          <div className='row row-cols-2'>
            <div className='col p-3'>
              <h4>Author</h4>
            </div>
            <div className='col p-3'>
              <h4><Link to='#comment-anchor' className='text-decoration-none'>Comments</Link></h4>
            </div>
            <div className='col p-3'>
              <h4>Rating</h4>
              <Rating />
            </div>
            <div className='col p-3'>
              <button type="button" className="btn btn-danger" data-bs-toggle="button" autoComplete="off">Favourite</button>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}