import React, { useContext } from 'react'
import RecipeContext from '../context'

const SearchFilters = ({ setFilter1, setFilter2, setFilter3, setFilter4 }) => {
	
	const { recipeList } = useContext(RecipeContext)

	// Get list of all tags for all recipes
	let recipeTags = []
	for (let recipe of recipeList) {
		for (let tag of recipe.tags) {
			if (!recipeTags.includes(tag)) {
				recipeTags.push(tag)
			}
		}
	}

	// Pre-defined filter list options
	const filteroptions = [
		{name: "Cuisine", content: ['Asian', 'Indian', 'Italian', 'Mexican', 'Thai', ]},
		{name: "Type", content: ['Vegetarian', 'Vegan', 'Gluten-free', 'Soup', 'Pasta', 'dinner', 'chicken', 'salad']},
		{name: "Difficulty", content: ['Easy', 'Medium', 'Hard']},
		{name: "Other", content: recipeTags}
	]

    // Function to set filter
	function setFilterOption(evt, setFilter) {
		if (evt.target.value == evt.target.firstChild.value) { 
			setFilter('')
		} else {
			setFilter(evt.target.value.toLowerCase())
		}
	}

	// Update filter each time a new change is selected
	function changeHandler(evt) {
		switch(evt.target.firstChild.label) {
			case "Cuisine":
				setFilterOption(evt, setFilter1)
				break
			case "Type":
				setFilterOption(evt, setFilter2)
				break
			case "Difficulty":
				setFilterOption(evt, setFilter3)
				break
			case "Other":
				setFilterOption(evt, setFilter4)
				break
		}
	}

	return (
        <div className="container w-75">
            <div className="row">
                {/* <div className="d-flex flex-wrap w-75 justify-content-center"> */}

                {filteroptions.map((filteroption, index) => (
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
        </div>
	)
}

export default SearchFilters

