import React from 'react'
import { Link } from 'react-router-dom'
import Rating from './Rating'

export default () => {
  return (
    <div className='container'>
      <div className='row justify-content-md-center'>
        <div className='col'>
          <div className='row align-items-center'>
            <div className='col-sm-7'>
              <img src='https://placekitten.com/g/600/400' />
            </div>
            <div className='col-sm-3'>
              <div className='row'>
                <h1>Recipe Name</h1>
              </div>
              <div className='row'>
                <div className='col-7'>
                  <h5>Author Name</h5>
                </div>
                <div className='col-5'>
                  <h5><Link to='#comment-anchor'>Comments</Link></h5>
                </div>
              </div>
              <div className='row'>
                <br></br>
              </div>
              <div className='row align-items-center'>
                <div className='col-7'>
                  <div className='row'>
                    <h4>Rating</h4>
                  </div>
                  <div className='row'>
                    <Rating />
                  </div>
                </div>
                <div className='col-5'>
                  <button type="button" className="btn btn-danger" data-bs-toggle="button" autocomplete="off">Favourite</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}