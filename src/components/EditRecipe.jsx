import React, { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import RecipeInputLine from "./RecipeInputLine"
import RecipeInputBlock from "./RecipeInputBlock"

const EditRecipe = ({ recipeList, setRecipeList }) => {
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

    const updateRecipeBackend = async (recipe) => {
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

    function submit(evt) {
        evt.preventDefault()
        updateRecipeBackend(recipe)
        updateRecipeList(recipe)
        alert('Recipe successfully updated!')
        nav(`/recipe/${recipeId}`)
    }

    function updateRecipeList() {
        // const newRecipeList = [...recipeList]
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

  return (
    <>
        <div className="h-100 d-flex flex-column align-items-center justify-content-center m-5">
            <h1>Edit recipe</h1>
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
                <input type="submit" className="btn btn-primary btn-lg mx-3" value="Update recipe"/>
            </form>
        </div>
    </>
    )
}

export default EditRecipe
