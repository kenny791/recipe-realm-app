import React, { useState, useEffect, useContext } from "react"
import { useNavigate, useParams } from "react-router-dom"
import RecipeInputForm from "./RecipeInputForm"
import RecipeContext from '../context'

const EditRecipe = () => {
    // Scroll to top on page load
	useEffect(() => {setTimeout(() => {window.scrollTo(0, 0)}, 0)}, [])

    const { recipeList, setRecipeList } = useContext(RecipeContext)
    const nav = useNavigate()
    const { recipeId } = useParams()
    
    // Overcome warning about component changing an uncontrolled input to be controlled
    const initialRecipe = {
        name: '',
        description: '',
        tags: '',
        image: '',
        ingredients: '',
        method: ''
    }

    const [recipe, setRecipe] = useState(initialRecipe)
    const { name, description, tags, image, ingredients, method } = recipe

    // Retrieve recipe 
    useEffect(() => {
        async function getRecipe() {
            const res = await fetch(`https://server-production-6a0e.up.railway.app/recipes/${recipeId}`)
            const data = await res.json()
            // Separate out entries by ';'
            data.ingredients = data.ingredients.map(x => x).join("; ")
            data.tags = data.tags.map(x => x).join("; ")
            data.method = data.method.map(x => x).join("; ")
            setRecipe(data)
        }
        getRecipe()
    }, [])
    
    // Parse string in text field to an array of strings (e.g. for ingredients, method)
    function splitBySemicolon(longEntry) {
        return longEntry.split(';')
    }

    // Update database
    const updateRecipeBackend = async (recipe) => {
        // Note can also instead use fetch(`https://server-production-6a0e.up.railway.app/recipes/edit/${recipe._id}`,
        const res = await fetch(`https://server-production-6a0e.up.railway.app/recipes/${recipeId}`,
        {
            method: 'PATCH',
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify(recipe)
        })
    }

    function updateEntry(evt) {
        setRecipe({
            ...recipe,
            [evt.target.id]: evt.target.value
        })
    }

    // Update recipeList state
    function updateRecipeList() {
        // const newRecipeList = [...recipeList]vv
        // or even better
        const newRecipeList = JSON.parse(JSON.stringify(recipeList))
        const indexToEdit = newRecipeList.findIndex((recipe) => recipe.id == recipeId)
        const oldRecipe = newRecipeList[indexToEdit]
        oldRecipe.name = name
        oldRecipe.description = description
        oldRecipe.tags = splitBySemicolon(tags)
        oldRecipe.image = image
        oldRecipe.ingredients = splitBySemicolon(ingredients)
        oldRecipe.method = splitBySemicolon(method)
        setRecipeList(newRecipeList)
    }

    function submit(evt) {
        evt.preventDefault()
        updateRecipeBackend(recipe)
        updateRecipeList(recipe)
        alert('Recipe successfully updated!')
        nav(`/recipe/${recipeId}`)
    }



  return (
    <>
        <div className="h-100 d-flex flex-column align-items-center justify-content-center m-5">
            <h1>Edit recipe</h1>
            <RecipeInputForm 
                name={name}
                description={description}
                tags={tags}
                image={image}
                ingredients={ingredients}
                method={method}
                submit={submit}
                updateEntry={updateEntry}
                buttonMsg={"Update Recipe"}/>
        </div>
    </>
    )
}

export default EditRecipe
