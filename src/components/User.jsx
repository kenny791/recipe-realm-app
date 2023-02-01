import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import ProfileFavourites from './ProfileFavourites'
import ProfileRatings from './ProfileRatings'
import ProfileComments from './ProfileComments'


const User = ({ loggedInUser, setLoggedInUser, recipeList, setRecipeList}) => {



	return (
		<div className="mt-5 d-flex flex-column align-items-center justify-content-center">
			<h1>Welcome {loggedInUser.username}</h1>
			<div className="container text-center">
				<ProfileRatings loggedInUser={loggedInUser} setLoggedInUser={setLoggedInUser} recipeList={recipeList}/>
				<ProfileComments loggedInUser={loggedInUser} recipeList={recipeList} setRecipeList={setRecipeList}/>
				<ProfileFavourites loggedInUser={loggedInUser} setLoggedInUser={setLoggedInUser} recipeList={recipeList} />
			</div>
		</div>
	)
}

export default User

