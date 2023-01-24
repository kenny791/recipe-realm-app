import React from 'react'
import { Link } from 'react-router-dom'

export default () => {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Recipe Realm</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/user">
                Home
              </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/search">
                  Recipes
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/">
                 Log-in 
                </Link>
              </li>
            </ul>
        </div>
      <form className='navbar-form pull-right'>
        <input type='text' className='span2' placeholder="What's cooking?" />
        <button type='submit' className='btn'>Search</button>
      </form>
      </div>
    </nav>
  )
}