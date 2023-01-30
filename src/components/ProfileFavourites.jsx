import React from 'react'
import { Link } from 'react-router-dom'

export default ({loggedInUser}) => {

    const favourites = loggedInUser.favourites.map((recipe, index) => {
		return (
		<li>
			<Link to={`/recipe/${recipe.id}`}>
			{recipe.name}
			</Link>
		</li>
		)
	})


    return (
        <div className='container row justify-content-md-center mx-auto'>
        <div className='col-12 col-lg-10'>
          <h3>Favourites</h3>
            <ul>
              {favourites}
            </ul>
        </div>
      </div>
    )
}