import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import ProfileFavourites from './ProfileFavourites'

const User = ({ loggedInUser, setLoggedInUser, recipeList}) => {




	// const favourites = loggedInUser.favourites.map((recipe, index) => {
	// 	return (
	// 		<div>
	// 			<li key={index}>
	// 				<Link to={`/recipe/${recipe.id}`}>
	// 					{recipe.name}
	// 				</Link>
	// 			</li>
	// 		</div>
	// 	)
	// })


	// // find all user comments from recipeList
	// const userComments = recipeList.map((recipe) => {
	// 	return recipe.comments.filter((comment) => {
	// 		return comment.user === loggedInUser.username
	// 	})
	// })
	// console.log(userComments)








	// useEffect (() => {
	// 	async function getUser() {
	// 	  const res = await fetch('https://server-production-6a0e.up.railway.app/users/WhiskWizard')
	// 	  const data = await res.json()
	// 	  setLoggedInUser(data)
	// 	}
	// 	getUser()
	// },[])
	






	return (
		<div className="h-100 d-flex flex-column align-items-center justify-content-center m-5">




			<h1>welcome {loggedInUser.username}</h1>
			<h2>Favourites</h2>
			{/* {favourites} */}









		</div>

	)
}

export default User










// <li className="nav-item">
// <Link className="nav-link" onClick={() => setIsLoggedIn(false)}  to="/login">
// {isLoggedIn ? 'Log-out' : 'Log-in'}
// </Link>
// </li>