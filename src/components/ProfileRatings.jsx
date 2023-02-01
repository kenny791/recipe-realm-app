import React from 'react'
import { Link } from 'react-router-dom'

const ProfileRatings = ({loggedInUser, recipeList}) => {


	// adds the user's ratings to the recipe object
	for (let i = 0; i < recipeList.length; i++) {
		let rating = recipeList[i].rating_list.find((rating) => rating.username.username === loggedInUser.username)
		recipeList[i].rating = rating ? rating.rating : null
	}
	//loop through object if ratings is not null, add to ratings object with recipe name and id
	const ratings = Object.values(recipeList).map((recipe, index) => {
		if (recipe.rating !== null) {
			return (
				<div className="container text-center" key={index}>
	
				



	<div className="container" key={index}>
	<div className="card mb-3">
		<div className="row g-0">
			<div className="col-md-4">
				<Link to={`/recipe/${recipe.id}`}>
					<img src={recipe.image} className="img-fluid rounded-start my-3" alt={recipe.name} />
				</Link>
			</div>
			<div className="col-md-8 text-start">
					<div className="card-body">
							<Link to={`/recipe/${recipe.id}`}>
								<h4>{recipe.name}</h4>
								<h4>{recipe.rating}★️️️️️</h4>
							</Link>
				</div>
			</div>
		</div>
	</div>
		</div>	




		</div>











			)
		}
	})
	















  return (
	<>
	  <div className="h-100 d-flex flex-column align-items-center justify-content-center m-5">
			<h1>Ratings</h1>
			{ratings}
		</div>
	</>
)}

export default ProfileRatings