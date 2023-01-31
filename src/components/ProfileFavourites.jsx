import React from 'react'
import { Link } from 'react-router-dom'

export default ({loggedInUser, setLoggedInUser}) => {

  console.log(loggedInUser._id)

  const extractIds = (favourites) => {
    return favourites.map((recipe) => recipe._id);
  }

  const handleClick = (recipeId) => {
    const updatedFavourites = loggedInUser.favourites.filter((recipe) => recipe.id !== recipeId)
    setLoggedInUser({ ...loggedInUser, favourites: updatedFavourites })
    sendData(extractIds(updatedFavourites))
  }


  const sendData = async (favourites) => {
    try {
      const response = await fetch(`http://localhost:8080/users/${loggedInUser._id}/favourites`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(
          {
          "favourites": favourites
          }
          )
      })
      const data = await response.json()
      console.log(data)
    } catch (error) {
      console.error(error)
    }
  }
 

	//display favourites
	const favourites = loggedInUser.favourites && Array.isArray(loggedInUser.favourites) ? loggedInUser.favourites.map((recipe, index) => {		  
		return (
			<div className='row' key={index}>
				<Link to={`/recipe/${recipe.id}`}>
				<div class="col-sm-4">
				<img class="img-fluid" src={recipe.image} alt="" />
				</div>
    			<div class="col-sm-7">
				{recipe.name}
				</div>
				
				</Link>
				<div class="col-sm-1">
        <button type="button" class="btn btn-danger" onClick={() => handleClick(recipe.id)}>Remove</button>
				</div>

			</div>
		)
	})
	: null

  return (
    <div className="container text-center">
      <h2>Favourites</h2>
      <div class="container text-center">
      {favourites}
      </div>
    </div>
  )
}
