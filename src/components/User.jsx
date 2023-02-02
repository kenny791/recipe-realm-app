import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import ProfileFavourites from './ProfileFavourites'
import ProfileRatings from './ProfileRatings'
import ProfileComments from './ProfileComments'


const User = ({ loggedInUser, setLoggedInUser, recipeList, setRecipeList}) => {
	useEffect(() => { window.scrollTo(0, 0) }, [])

	return (
		<div className="container text-center">
			<h1>Welcome {loggedInUser.username}</h1>
			<div className="container text-center">
			<ProfileComments loggedInUser={loggedInUser} recipeList={recipeList} setRecipeList={setRecipeList}/>
			<ProfileRatings loggedInUser={loggedInUser} setLoggedInUser={setLoggedInUser} recipeList={recipeList}/>
			<ProfileFavourites loggedInUser={loggedInUser} setLoggedInUser={setLoggedInUser} />
			</div>
		</div>
	)
}

export default User

