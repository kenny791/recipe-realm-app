import React from 'react'
import RecipeMenu from './RecipeMenu'

export default () => {
  return (
    <div className='container'>
      <RecipeMenu />
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