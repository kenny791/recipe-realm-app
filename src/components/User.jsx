import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import ProfileFavourites from './ProfileFavourites'


const User = ({ loggedInUser, setLoggedInUser}) => {



	return (
		<div className="container text-center">
			<h1>Welcome {loggedInUser.username}</h1>
			<div class="container text-center">
			<ProfileFavourites loggedInUser={loggedInUser} setLoggedInUser={setLoggedInUser} />
			</div>
		</div>
	)
}

export default User

