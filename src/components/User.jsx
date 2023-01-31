import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import ProfileFavourites from './ProfileFavourites'
import ProfileRatings from './ProfileRatings'
import ProfileComments from './ProfileComments'


const User = ({ loggedInUser, setLoggedInUser, recipeList}) => {

	// // keeps only the ratings and comments for the logged in user
	// const ratingsList = recipeList
	// let updatedRecipeList = Object.values(recipeList).map(recipe => {
	// 	delete recipe.author
	// 	delete recipe.description
	// 	delete recipe.ingredients
	// 	delete recipe.method
	// 	delete recipe.favourites
	// 	delete recipe.__v
	// 	delete recipe.image
	// 	delete recipe.tags
	// 	return recipe
	// })
	// // adds the user's rating and comment to the recipe object
	// for (let i = 0; i < updatedRecipeList.length; i++) {
	// 	let rating = updatedRecipeList[i].rating_list.find((rating) => rating.username.username === loggedInUser.username)
	// 	updatedRecipeList[i].rating = rating ? rating.rating : null
	// 	let comment = updatedRecipeList[i].comments.find((comment) => comment.username.username === loggedInUser.username)
	// 	updatedRecipeList[i].comment = comment ? comment.comment : null
	// }
	
	// console.log(updatedRecipeList)

	return (
		<div className="container text-center">
			<h1>Welcome {loggedInUser.username}</h1>
			<div class="container text-center">
			<ProfileComments loggedInUser={loggedInUser} setLoggedInUser={setLoggedInUser} recipeList={recipeList}/>
			<ProfileRatings loggedInUser={loggedInUser} setLoggedInUser={setLoggedInUser} recipeList={recipeList}/>
			<ProfileFavourites loggedInUser={loggedInUser} setLoggedInUser={setLoggedInUser} />
			</div>
		</div>
	)
}

export default User

