import React, { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"


const NewRecipe = ({ loggedInUser, recipeList, setRecipeList }) => {
	// Scroll to top on page load    
    useEffect(() => {setTimeout(() => {window.scrollTo(0, 0)}, 0)}, [])

    const nav = useNavigate()

    const initialEntry = {
        recipeId: '',
        name: '',
        description: '',
        tags: '',
        image: '',
        ingredients: '',
        method: ''
    }
    const [entry, setEntry] = useState(initialEntry)
    const { name, description, tags, image, ingredients, method } = entry

    // Styling for divs for input
    const styled = {margin: '15px'}

    // Parse single string input to an array of strings
    function splitBySemicolon(longEntry) {
        return longEntry.split(';')
    }

    const addEntry = async (user, entry) => {
        // Cannot just be recipeList.length in case there are deleted recipes, in which case there will be duplicate ids
        const id = recipeList[recipeList.length - 1].id + 1
        const ingredients = splitBySemicolon(entry.ingredients)
        const method = splitBySemicolon(entry.method)
        const tags = splitBySemicolon(entry.tags)

        const newEntry = {
            recipeId: id,
            name: entry.name,
            author: user._id,
            description: entry.description,
            tags: tags,
            image: entry.image,
            ingredients: ingredients,
            method: method
        }

        const returnedEntry = await fetch("https://server-production-6a0e.up.railway.app/recipes/", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newEntry)
        })
        
        const newRecipe = await returnedEntry.json()
        setRecipeList([...recipeList, newRecipe])
        alert('Recipe successfully created!')
        nav(`/recipe/${id}`)
        console.log(newRecipe)
    }

    function updateEntry(evt) {
        setEntry({
            ...entry,
            [evt.target.id]: evt.target.value
        })
    }

    function submit(evt) {
        evt.preventDefault()
        addEntry(loggedInUser, entry)
    }


  return (
    <>
		<div className="h-100 d-flex flex-column align-items-center justify-content-center m-5">
            <h1>Submit a new recipe</h1>
            <form className="m-3 mt-5 w-75" onSubmit={submit}>
                <div className="form-group" style={styled}>
                    <label htmlFor="name">Recipe Name</label>
                    <input type="text" className="form-control" id="name" onChange={updateEntry} value={name} required/>
                </div>
                <div className="form-group" style={styled}>
                    <label htmlFor="description">Description</label>
                    <textarea className="form-control" id="description" onChange={updateEntry} value={description} required/>
                </div>
                <div className="form-group" style={styled}>
                    <label htmlFor="tags">Recipe Tags  
                        <span className="fw-light">  (separated by semi-colons)</span>
                    </label>
                    <input type="text" className="form-control" id="tags" placeholder="e.g. Asian; soup; chicken" onChange={updateEntry} value={tags} required/>
                </div>
                <div className="form-group" style={styled}>
                    <label htmlFor="image">Image
                        <span className="fw-light">  (URL format, default image applied if none entered)</span>
                    </label>
                    <input type="text" className="form-control" id="image" onChange={updateEntry} value={image}/>
                </div>
                <div className="form-group" style={styled}>
                    <label htmlFor="ingredients">Ingredients 
                        <span className="fw-light">  (separated by semi-colons)</span>
                    </label>
                    <textarea className="form-control" id="ingredients" placeholder="e.g. 500g chicken (diced); 2 carrots; 2 onions; 2 stalks celery" required onChange={updateEntry} value={ingredients}/>
                </div>
                <div className="form-group" style={styled}>
                    <label htmlFor="methods">Method 
                        <span className="fw-light">  (separated by semi-colons; numbers will be automatically added)</span>
                    </label>
                    <textarea className="form-control" id="method" placeholder={`e.g. Cut carrots, onions and celeries into big chunks;\n Place chicken and vegetables in large pot and boil for 30 minutes;\n Serve with parsley`} required onChange={updateEntry} value={method}/>
                </div>
                <input type="submit" className="btn btn-primary btn-lg mx-3" value="Submit"/>
            </form>
        </div>
        
    </>
  )
}

// fieldset

export default NewRecipe
