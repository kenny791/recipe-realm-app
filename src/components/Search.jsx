import React, { useState } from 'react'
import seed from './Seed.jsx'
// import recipes from '../recipes.js'

const Search = ({ searchInput, setSearchInput, recipeList }) => {

	// const [recipes, setRecipes] = useState([])
  
	// useEffect(() => {
	//   async function getRecipes() {
	// 	const res = await fetch(`https://server-production-6a0e.up.railway.app/recipes/`)
	// 	const data = await res.json()
	// 	setRecipes(data) 
	//   }
	//   getRecipes()
	// }, [])


	const filteroptions = [
		{name: "Cuisine", content: ['Indian', 'Italian', 'Chinese', 'Japanese', 'French', 'Thai', 'Greek']},
		{name: "Dietary requirements", content: ['Vegetarian', 'Vegan', 'Gluten free', 'Pescaterian']},
		{name: "Difficulty", content: ['easy', 'medium', 'hard']},
		{name: "Other", content: []}
	]

	const handleChange = (event) => {
		setSearchInput(event.target.value)
	}

	// const [displayData, setDisplaydata] = useState({seed})

	const filterrecipes = recipeList.filter(recipe => {
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
				<input className="form-control" id="floatingInput" placeholder="samplesearchterm" onChange={handleChange} value={searchInput}/>
				<label for="floatingInput">Search</label>
			</div>
			{/* Filter dropdowns */}
			<div className="container w-75">
				<div className="row">
				{/* <div className="d-flex flex-wrap w-75 justify-content-center"> */}

				{filteroptions.map((filteroption) => (
					<div className="col-12 col-md-6 col-lg-3 p-1 p-lg-2">
						<div className="p-0 flex-fill">
							<div className="form-floating">
								<select className="form-select" id="floatingSelect" aria-label="Floating label select example">
									<option selected>{filteroption.name}</option>
									{filteroption.content.map((selection, index) => (
										<option value={index}>{selection}</option>
									))}
								</select>
								<label for="floatingSelect">Filter</label>
							</div>
						</div>
					</div>					
				))}

					{/* Dropdown extended example */}
					<div className="col-12 col-md-6 col-lg-3 p-1 p-lg-2">
						<div className="p-0 flex-fill">
							<div className="form-floating">
								<select className="form-select" id="floatingSelect" aria-label="Floating label select example">
									<option selected>Dietary</option>
									<option value="1">One</option>
									<option value="2">Two</option>
									<option value="3">Gluten Free</option>
								</select>
								<label for="floatingSelect">Filter</label>
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
							<figure className="figure">
								<img src={recipe.image} className="figure-img img-fluid rounded" alt={recipe.name} />
								<h4>{recipe.name}</h4>
							</figure>
						</div>
					))}
					{/* Random images: https://images.unsplash.com/photo-1606604830262-2e0732b12acc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1363&q=80
					
					https://loremflickr.com/320/240/fruit
					
					https://loremflickr.com/320/240/sushi*/}

					{/* Generic version of above */}
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