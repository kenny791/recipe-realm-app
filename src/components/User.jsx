import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import ProfileFavourites from './ProfileFavourites'

const User = ({ loggedInUser, setLoggedInUser}) => {




	const favourites = loggedInUser.favourites.map((recipe, index) => {
		return (
		<li>
			<Link to={`/recipe/${recipe.id}`}>
			{recipe.name}
			</Link>
		</li>
		)
	})


	useEffect (() => {
		async function getUser() {
		  const res = await fetch('https://server-production-6a0e.up.railway.app/users/user4')
		  const data = await res.json()
		  setLoggedInUser(data)
		}
		getUser()
	},[])
	






	return (
		<div className="container-fluid">



			<h1>welcome {loggedInUser.username}</h1>
			<h2>Favourites</h2>
			{favourites}
			{/* <ProfileFavourites loggedInUser={loggedInUser}/> */}

		</div>

	)
}

export default User










// <li className="nav-item">
// <Link className="nav-link" onClick={() => setIsLoggedIn(false)}  to="/login">
// {isLoggedIn ? 'Log-out' : 'Log-in'}
// </Link>
// </li>