import React, { useState, useEffect, useContext } from "react"
import { useNavigate } from "react-router-dom"
import RecipeContext from '../context'
import RecipeInputForm from "./RecipeInputForm"

const NewRecipe = () => {
	// Scroll to top on page load    
    useEffect(() => {setTimeout(() => {window.scrollTo(0, 0)}, 0)}, [])
    const { loggedInUser, recipeList, setRecipeList } = useContext(RecipeContext)
    const nav = useNavigate()

    // To overcome warning message about component changing an uncontrolled input to be controlled
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

        const returnedEntry = await fetch("https://recipe-realm-server.vercel.app/recipes/", {
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
            <RecipeInputForm 
                name={name}
                description={description}
                tags={tags}
                image={image}
                ingredients={ingredients}
                method={method}
                submit={submit}
                updateEntry={updateEntry}
                buttonMsg={"Submit"}/>
        </div>
    </>
  )
}

export default NewRecipe
