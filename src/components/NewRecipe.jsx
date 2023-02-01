import React, { useState } from "react"


const NewRecipe = ({ loggedInUser, setRecipeList }) => {

    const initialEntry = {
        recipeName: '',
        recipeDescription: '',
        recipeTags: '',
        recipeImage: '',
        recipeIngredients: '',
        recipeMethod: ''
    }
    const [entry, setEntry] = useState(initialEntry)
    const { recipeName, recipeDescription, recipeTags, recipeImage, recipeIngredients, recipeMethod } = entry

    // Styling for divs for input
    const styled = {margin: '15px'}

    function updateEntry(evt) {
        setEntry({
            ...entry,
            [evt.target.id]: evt.target.value
        })
    }

    function submit(evt) {
        evt.preventDefault()
        // alert(`Successfully submitted! ${{entry}}`)
        console.log(entry)
    }

  return (
    <>
		<div className="h-100 d-flex flex-column align-items-center justify-content-center m-5">
            <h1>Submit a new recipe</h1>
            <form className="m-3 mt-5 w-75" onSubmit={submit}>
                <div className="form-group" style={styled}>
                    <label htmlFor="name">Recipe Name</label>
                    <input type="text" className="form-control" id="recipeName" onChange={updateEntry} value={recipeName} required/>
                </div>
                <div className="form-group" style={styled}>
                    <label htmlFor="description">Description</label>
                    <textarea className="form-control" id="recipeDescription" onChange={updateEntry} value={recipeDescription} required/>
                </div>
                <div className="form-group" style={styled}>
                    <label htmlFor="tags">Recipe Tags  
                        <span className="fw-light">  (separated by commas)</span>
                    </label>
                    <input type="text" className="form-control" id="recipeTags" placeholder="e.g. Asian, soup, chicken" onChange={updateEntry} value={recipeTags} required/>
                </div>
                <div className="form-group" style={styled}>
                    <label htmlFor="image">Image
                        <span className="fw-light">  (URL format, default image applied if none entered)</span>
                    </label>
                    <input type="text" className="form-control" id="recipeImage" onChange={updateEntry} value={recipeImage}/>
                </div>
                <div className="form-group" style={styled}>
                    <label htmlFor="ingredients">Ingredients 
                        <span className="fw-light">  (separated by semi-colons)</span>
                    </label>
                    <textarea className="form-control" id="recipeIngredients" placeholder="e.g. 500g chicken (diced); 2 carrots; 2 onions; 2 stalks celery" required onChange={updateEntry} value={recipeIngredients}/>
                </div>
                <div className="form-group" style={styled}>
                    <label htmlFor="methods">Method 
                        <span className="fw-light">  (separated by semi-colons)</span>
                    </label>
                    <textarea className="form-control" id="recipeMethod" placeholder="e.g. 1. Cut carrots, onions and celeries into big chunks; 2. Place chicken and vegetables in large pot and boil for 30 minutes; 3. Serve with parsley" required onChange={updateEntry} value={recipeMethod}/>
                </div>
                <input type="submit" className="btn btn-primary btn-lg mx-3" value="Submit"/>
            </form>
        </div>
        
    </>
  )
}

// fieldset

export default NewRecipe
