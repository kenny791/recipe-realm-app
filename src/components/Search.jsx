import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import seed from './Seed.jsx'
// import recipes from '../recipes.js'

const Search = ({ searchInput, setSearchInput, recipeList }) => {

	let recipeTags = []
	for (let recipe of recipeList) {
		for (let tag of recipe.tags) {
			if (!recipeTags.includes(tag)) {
				recipeTags.push(tag)
			}
		}
	}

	const filteroptions = [
		{name: "Cuisine", content: ['Indian', 'Italian', 'Chinese', 'Japanese', 'French', 'Thai', 'Greek']},
		{name: "Dietary requirements", content: ['Vegetarian', 'Vegan', 'Gluten free', 'Pescaterian']},
		{name: "Difficulty", content: ['easy', 'medium', 'hard']},
		{name: "Other", content: recipeTags}
	]

	// let currentFilters = filters
	// let filterLabel = event.target.firstChild.label
	// let specificFilter = event.target.value

	// const [recipes, setRecipes] = useState(recipeList)
	const [filter1, setFilter1] = useState('')
	const [filter2, setFilter2] = useState('')
	const [filter3, setFilter3] = useState('')
	const [filter4, setFilter4] = useState('')

	function changeHandler1(evt) {
		if (evt.target.value == evt.target.firstChild.label) { 
			setFilter1('')
		} else {
			setFilter1(evt.target[evt.target.value].text.toLowerCase())
		}
		console.log(evt.target)
	}

	const filterrecipes = recipeList
		.filter(recipe => {
			return recipe.name.toLowerCase().includes(searchInput) || recipe.description.toLowerCase().includes(searchInput)
		})
		.filter(recipe => {
			let filtered = false 

			for (let tags of recipe.tags) {
				if (tags.toLowerCase().includes(filter1)) {
					filtered = true
				}
			}
			return filtered
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
								<select className="form-select" id="floatingSelect" aria-label="Floating label select example" onChange={changeHandler1}>
									<option defaultValue>Dietary</option>
									<option value="1">One</option>
									<option value="2">Spicy</option>
									<option value="3">Salad</option>
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