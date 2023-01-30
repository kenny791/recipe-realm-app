import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import seed from './Seed.jsx'
// import recipes from '../recipes.js'

const Search = ({ searchInput, setSearchInput, recipeList }) => {

	const filteroptions = [
		{name: "Cuisine", content: ['Indian', 'Italian', 'Chinese', 'Japanese', 'French', 'Thai', 'Greek']},
		{name: "Dietary requirements", content: ['Vegetarian', 'Vegan', 'Gluten free', 'Pescaterian']},
		{name: "Difficulty", content: ['easy', 'medium', 'hard']},
		{name: "Other", content: []}
	]

	const [recipes, setRecipes] = useState(recipeList)

	const filterrecipes = recipeList.filter(recipe => {
		// console.log(recipe.name.toLowerCase().includes("salad"))
		return recipe.name.toLowerCase().includes(searchInput) || recipe.description.toLowerCase().includes(searchInput)
	})

  return (
    <>
		{/* Centre whole page */}
		<div className="h-100 d-flex flex-column align-items-center justify-content-center m-5">
			{/* Search bar */}
			{/* mb is margin bottom; w is width */}
			<div className="form-floating m-3 mt-5 w-75 ">
				{/* Need to have placeholder as uses it as a pseudoelement */}
				<input className="form-control" id="floatingInput" placeholder="samplesearchterm" onChange={(evt) => setSearchInput(evt.target.value)} value={searchInput}/>
				<label htmlFor="floatingInput">Search</label>
			</div>
			{/* Filter dropdowns */}
			<div className="container w-75">
				<div className="row">
				{/* <div className="d-flex flex-wrap w-75 justify-content-center"> */}

				{filteroptions.map((filteroption, index) => (
					<div className="col-12 col-md-6 col-lg-3 p-1 p-lg-2">
						<div className="p-0 flex-fill">
							<div className="form-floating">
								<select className="form-select" id="floatingSelect" aria-label="Floating label select example" key={index}>
									<option defaultValue>{filteroption.name}</option>
									{filteroption.content.map((selection, index) => (
										<option value={selection} key={index}>{selection}</option>
									))}
								</select>
								<label htmlFor="floatingSelect">Filter</label>
							</div>
						</div>
					</div>					
				))}

					{/* Dropdown extended example */}
					<div className="col-12 col-md-6 col-lg-3 p-1 p-lg-2">
						<div className="p-0 flex-fill">
							<div className="form-floating">
								<select className="form-select" id="floatingSelect" aria-label="Floating label select example">
									<option defaultValue>Dietary</option>
									<option value="1">One</option>
									<option value="2">Two</option>
									<option value="3">Gluten Free</option>
								</select>
								<label htmlFor="floatingSelect">Filter</label>
							</div>
						</div>
					</div>
					{/* </div> */}
				</div>
			</div>

			{/* List of recipes/display recipes */}
			<div className="container d-flex flex-wrap align-items-center justify-content-center mt-5 w-75">
				<div className="row g-4 g-lg-6">
					{filterrecipes.map((recipe) => (
						<div className="col-12 col-md-6 col-lg-4 col-xl-3 p-1 p-lg-2" key={recipe.id}>
							<Link to={`/recipe/${recipe.id}`} style={{color: "black"}}>
								<figure className="figure">
									<img src={recipe.image} className="figure-img img-fluid rounded" alt={recipe.name} />
									<h4>{recipe.name}</h4>
								</figure>
							</Link>
						</div>
					))}

					<div className="col-12 col-md-6 col-lg-4 col-xl-3 p-1 p-lg-2">
						<figure className="figure">
							<img src="https://loremflickr.com/320/240/sushi" className="figure-img img-fluid rounded" alt="A generic square placeholder image with rounded corners in a figure." />
							<p>Description here</p>
						</figure>
					</div>
				</div>
			</div>
		</div>
    </>
  )
}

export default Search