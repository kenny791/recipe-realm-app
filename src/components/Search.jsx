import React, { useState } from 'react'
import { Link } from 'react-router-dom'

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
		{name: "Cuisine", content: ['Asian', 'Indian', 'Italian', 'Mexican', 'Thai', ]},
		{name: "Type", content: ['Vegetarian', 'Vegan', 'Gluten-free', 'Soup', 'Pasta', 'dinner', 'chicken', 'salad']},
		{name: "Difficulty", content: ['Easy', 'Medium', 'Hard']},
		{name: "Other", content: recipeTags}
	]

	// const [recipes, setRecipes] = useState(recipeList)
	const [filter1, setFilter1] = useState('')
	const [filter2, setFilter2] = useState('')
	const [filter3, setFilter3] = useState('')
	const [filter4, setFilter4] = useState('')

	function changeHandler1(evt) {
		switch(evt.target.firstChild.label) {
			case "Cuisine":
				if (evt.target.value == evt.target.firstChild.value) { 
					setFilter1('')
				} else {
					setFilter1(evt.target.value.toLowerCase())
				}
				break
			case "Type":
				if (evt.target.value == evt.target.firstChild.label) { 
					setFilter2('')
				} else {
					setFilter2(evt.target.value.toLowerCase())
				}
				break
			case "Difficulty":
				if (evt.target.value == evt.target.firstChild.label) { 
					setFilter3('')
				} else {
					setFilter3(evt.target.value.toLowerCase())
				}
				break
			case "Other":
				if (evt.target.value == evt.target.firstChild.label) { 
					setFilter4('')
				} else {
					setFilter4(evt.target.value.toLowerCase())
				}
				break
		}
	}

	var filterrecipes = recipeList
		.filter(recipe => {
			return recipe.name.toLowerCase().includes(searchInput) || recipe.description.toLowerCase().includes(searchInput)
		})
		.filter(recipe => {
			// let recipeTags = recipe.tags.map(tag => tag.toLowerCase())
			// console.log(recipeTags)
			// console.log(filter1)
			// return recipeTags.includes(filter1)

			let filtered = false
			console.log(filter1)
			for (let tags of recipe.tags) {
				if (tags.toLowerCase().includes(filter1)) {
					filtered = true
				}
			}

			// for (let tags in recipe.tags) {
			// 	if (recipe.tags[tags].toLowerCase().includes(filter1)) {
			// 		filtered = true
			// 	}
			// }

			return filtered
			})
		.filter(recipe => {
			let filtered = false
			for (let tags of recipe.tags) {
				if (tags.toLowerCase().includes(filter2)) {
					filtered = true
				}
			}
			return filtered
		})
		.filter(recipe => {
			let filtered = false
			for (let tags of recipe.tags) {
				if (tags.toLowerCase().includes(filter3)) {
					filtered = true
				}
			}
			return filtered
		})
		.filter(recipe => {
			let filtered = false
			for (let tags of recipe.tags) {
				if (tags.toLowerCase().includes(filter4)) {
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
								<select className="form-select" id="floatingSelect" aria-label="Floating label select example" onChange={changeHandler1}>
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