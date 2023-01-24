import React from 'react'
import { Link } from 'react-router-dom'
import Rating from './Rating'

export default () => {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col'>
          <img src='https://placekitten.com/g/400/300' />
        </div>
        <div className='col'>
          <div className='row'>
            <h1>Recipe Name</h1>
          </div>
          <div className='row'>
            <div className='col'>
              <h5>Author Name</h5>
            </div>
            <div className='col'>
              {/* Anchor tag to link to comment section */}
              <h5><Link to='#comment-anchor'>Comments</Link></h5>
            </div>
          </div>
          <div className='row'>
            <div className='col'>
              <div className='row'>
                <h2>Rating</h2>
              </div>
              <div className='row'>
                <Rating />
              </div>
            </div>
            <div className='col'>
              {/* Save button */}
              <button type="button" className="btn btn-danger" data-bs-toggle="button" autocomplete="off">Save</button>
            </div>
          </div>
        </div>
      </div>
      <div className='container'>
        <h3>Description</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore at quasi modi in deserunt quam, vero corrupti suscipit laborum quos hic aperiam sunt explicabo, consequatur aliquid error quibusdam itaque ducimus.</p>
      </div>
      <div className='container'>
        <h3>Ingredients</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore at quasi modi in deserunt quam, vero corrupti suscipit laborum quos hic aperiam sunt explicabo, consequatur aliquid error quibusdam itaque ducimus.</p>
      </div>
      <div className='container'>
        <h3>Preparation</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore at quasi modi in deserunt quam, vero corrupti suscipit laborum quos hic aperiam sunt explicabo, consequatur aliquid error quibusdam itaque ducimus.</p>
      </div>
      <div className='container'>
        <div className='row'>
          <div className='col'>
        <h3 id='comment-anchor'>Comment</h3>
          </div>
        </div>
        <div className='row'>
          <div className='col'>
            <input type="text" className="form-control" id="floatingInput" />
          </div>
        </div>
        <div className='row'>
          <div className='col'>
            <button type="button" className="btn btn-secondary" data-bs-toggle="button" autocomplete="off">Publish</button>
          </div>
          <div className='col'>
            <h4>5 Comments</h4>
          </div>
        </div>
        <div className='row'>
          <div className='col-1'>
            <h6>Name</h6>
          </div>
          <div className='col'>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore at quasi modi in deserunt quam, vero corrupti suscipit laborum quos hic aperiam sunt explicabo, consequatur aliquid error quibusdam itaque ducimus.</p>
          </div>
        </div>
        <div className='row'>
          <div className='col-1'>
            <h6>Name</h6>
          </div>
          <div className='col'>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore at quasi modi in deserunt quam, vero corrupti suscipit laborum quos hic aperiam sunt explicabo, consequatur aliquid error quibusdam itaque ducimus.</p>
          </div>
        </div>
        <div className='row'>
          <div className='col-1'>
            <h6>Name</h6>
          </div>
          <div className='col'>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore at quasi modi in deserunt quam, vero corrupti suscipit laborum quos hic aperiam sunt explicabo, consequatur aliquid error quibusdam itaque ducimus.</p>
          </div>
        </div>
        <div className='row'>
          <div className='col-1'>
            <h6>Name</h6>
          </div>
          <div className='col'>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore at quasi modi in deserunt quam, vero corrupti suscipit laborum quos hic aperiam sunt explicabo, consequatur aliquid error quibusdam itaque ducimus.</p>
          </div>
        </div>
        <div className='row'>
          <div className='col-1'>
            <h6>Name</h6>
          </div>
          <div className='col'>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore at quasi modi in deserunt quam, vero corrupti suscipit laborum quos hic aperiam sunt explicabo, consequatur aliquid error quibusdam itaque ducimus.</p>
          </div>
        </div>
        <div className='row'>
          <div className='col-1'>
            <h6>Name</h6>
          </div>
          <div className='col'>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore at quasi modi in deserunt quam, vero corrupti suscipit laborum quos hic aperiam sunt explicabo, consequatur aliquid error quibusdam itaque ducimus.</p>
          </div>
        </div>
      </div>
    </div>
  )
}