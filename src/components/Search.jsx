import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import SearchFilters from './SearchFilters'

const Search = ({ searchInput, setSearchInput, recipeList }) => {

	// // Get list of all tags for all recipes
	// let recipeTags = []
	// for (let recipe of recipeList) {
	// 	for (let tag of recipe.tags) {
	// 		if (!recipeTags.includes(tag)) {
	// 			recipeTags.push(tag)
	// 		}
	// 	}
	// }

	// // Pre-defined filter list options
	// const filteroptions = [
	// 	{name: "Cuisine", content: ['Asian', 'Indian', 'Italian', 'Mexican', 'Thai', ]},
	// 	{name: "Type", content: ['Vegetarian', 'Vegan', 'Gluten-free', 'Soup', 'Pasta', 'dinner', 'chicken', 'salad']},
	// 	{name: "Difficulty", content: ['Easy', 'Medium', 'Hard']},
	// 	{name: "Other", content: recipeTags}
	// ]

	// State for each filter option
	const [filter1, setFilter1] = useState('')
	const [filter2, setFilter2] = useState('')
	const [filter3, setFilter3] = useState('')
	const [filter4, setFilter4] = useState('')

	// // Function to set filter
	// function setFilterOption(evt, setFilter) {
	// 	if (evt.target.value == evt.target.firstChild.value) { 
	// 		setFilter('')
	// 	} else {
	// 		setFilter(evt.target.value.toLowerCase())
	// 	}
	// }

	// // Update filter each time a new change is selected
	// function changeHandler(evt) {
	// 	switch(evt.target.firstChild.label) {
	// 		case "Cuisine":
	// 			setFilterOption(evt, setFilter1)
	// 			break
	// 		case "Type":
	// 			setFilterOption(evt, setFilter2)
	// 			break
	// 		case "Difficulty":
	// 			setFilterOption(evt, setFilter3)
	// 			break
	// 		case "Other":
	// 			setFilterOption(evt, setFilter4)
	// 			break
	// 	}
	// }

	// Function to determine if a recipe contains a specific filter tag
	function doesTagExist(recipe, filter) {
		// let recipeTags = recipe.tags.map(tag => tag.toLowerCase())
		// return recipeTags.includes(filter1)

		for (let tags of recipe.tags) {
			if (tags.toLowerCase().includes(filter)) {
				return true
			}
		}
		return false
	}

	// Filter recipes
	var filterrecipes = recipeList
		.filter(recipe => recipe.name.toLowerCase().includes(searchInput) || recipe.description.toLowerCase().includes(searchInput) || doesTagExist(recipe, searchInput))
		.filter(recipe => doesTagExist(recipe, filter1))
		.filter(recipe => doesTagExist(recipe, filter2))
		.filter(recipe => doesTagExist(recipe, filter3))
		.filter(recipe => doesTagExist(recipe, filter4))
		

  return (
    <>
		{/* Centre whole page */}
		<div className="h-100 d-flex flex-column align-items-center justify-content-center m-5">
			{/* Search bar */}
			<div className="form-floating m-3 mt-5 w-75 ">
				{/* Need to have placeholder as uses it as a pseudoelement */}
				<input className="form-control" id="floatingInput" placeholder="samplesearchterm" onChange={(evt) => setSearchInput(evt.target.value)} value={searchInput}/>
				<label htmlFor="floatingInput">Search</label>
			</div>
			{/* Filter dropdowns */}
			{/* <div className="container w-75">
				<div className="row">
				{/* <div className="d-flex flex-wrap w-75 justify-content-center"> */}

				{/* {filteroptions.map((filteroption, index) => (
					<div className="col-12 col-md-6 col-lg-3 p-1 p-lg-2" key={index}>
						<div className="p-0 flex-fill">
							<div className="form-floating">
								<select className="form-select" id="floatingSelect" aria-label="Floating label select example" onChange={changeHandler}>
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
				</div>
			</div> */} 
			<SearchFilters setFilter1={setFilter1} setFilter2={setFilter2} setFilter3={setFilter3} setFilter4={setFilter4} recipeList={recipeList} />

			{/* List of recipes/display recipes */}
			<div className="container d-flex flex-wrap align-items-center justify-content-center mt-5 w-75">
				<div className="row g-4 g-lg-6">
					{filterrecipes.map((recipe) => (
						<div className="col-12 col-md-6 col-lg-4 col-xl-3 p-1 p-lg-2 figurediv" key={recipe.id}>
							<Link to={`/recipe/${recipe.id}`} style={{color: "black"}}>
								<figure className="figure">
									<img src={recipe.image} className="figure-img img-fluid rounded" alt={recipe.name} />
									<h4>{recipe.name}</h4>
								</figure>
							</Link>
						</div>
					))}
				</div>
			</div>
		</div>
    </>
  )
}

export default Search