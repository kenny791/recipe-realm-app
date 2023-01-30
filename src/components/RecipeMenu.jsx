import React from 'react'
import { Link } from 'react-router-dom'
import Favourite from './Favourite'
import Rating from './Rating'

export default ({recipe}) => {

  return (
    <div className='container w-75 mb-3'>
      <div className='row align-items-center justify-content-center'>

        {/* Image column */}
        <div className='text-center col-md-12 col-lg-6 p-3'>
          <img src={recipe.image || 'https://placekitten.com/200/300'} className='img-fluid' />
        </div>

        {/* Column with Recipe Name, Author Name, Rating, and Favourite button */}
        <div className='text-center col-md-12 col-lg-6'>
            <h1>{recipe.name}</h1>
          <div className='row row-cols-2'>
            <div className='col p-3'>
              <h4>{recipe.author}</h4>
            </div>
            <div className='col p-3'>
              <h4><Link to='#comment-anchor' className='text-decoration-none'>Comments</Link></h4>
            </div>
            <div className='col p-3'>
              <h4>Rating</h4>
              <Rating recipeRating={recipe.rating_list} />
            </div>
            <div className='col p-3'>
              <Favourite />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}