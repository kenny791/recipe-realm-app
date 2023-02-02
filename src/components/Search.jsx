import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import SearchFilters from './SearchFilters'

const Search = ({ searchInput, setSearchInput, recipeList }) => {
	// Scroll to top on page load
	useEffect(() => {setTimeout(() => {window.scrollTo(0, 0)}, 0)}, [])

	// State for each filter option
	const [filter1, setFilter1] = useState('')
	const [filter2, setFilter2] = useState('')
	const [filter3, setFilter3] = useState('')
	const [filter4, setFilter4] = useState('')

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