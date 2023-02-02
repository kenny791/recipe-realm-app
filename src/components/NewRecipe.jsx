import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import RecipeInputLine from "./RecipeInputLine"
import RecipeInputBlock from "./RecipeInputBlock"

const NewRecipe = ({ loggedInUser, recipeList, setRecipeList }) => {

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
    }

    function updateEntry(evt) {
        setEntry({
            ...entry,
            [evt.target.id]: evt.target.value
        })
        console.log(evt.target.value)
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
                <RecipeInputLine title="Recipe Name" id="name" value={name} updateEntry={updateEntry} required={true} /> 

                <RecipeInputBlock title="Description" id="description" value={description} updateEntry={updateEntry} />

                <RecipeInputLine 
                    title="Recipe Tags" 
                    id="tags" 
                    value={tags} 
                    aid={"  (separated by semi-colons)"} 
                    prompt={"e.g. Asian; soup; chicken"}
                    required={true}
                    updateEntry={updateEntry}  />

                <RecipeInputLine 
                    title="Image" 
                    id="image" 
                    value={image} 
                    aid={"  (URL format, default image applied if none entered)"} 
                    required={false}
                    updateEntry={updateEntry}  />

                <RecipeInputBlock 
                    title="Ingredients" 
                    id="ingredients" 
                    value={ingredients} 
                    aid={"  (separated by semi-colons)"} 
                    prompt={"e.g. 500g chicken (diced); 2 carrots; 2 onions; 2 stalks celery"}
                    updateEntry={updateEntry}  />

                <RecipeInputBlock 
                    title="Method" 
                    id="method" 
                    value={method} 
                    aid={"  (separated by semi-colons; numbers will be automatically added)"} 
                    prompt={`e.g. Cut carrots, onions and celeries into big chunks;\n Place chicken and vegetables in large pot and boil for 30 minutes;\n Serve with parsley`}
                    updateEntry={updateEntry}  />
                <input type="submit" className="btn btn-primary btn-lg mx-3" value="Submit"/>
            </form>
        </div>
        
    </>
  )
}

export default NewRecipe
