import React, { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"


const EditRecipe = ({ recipeList, setRecipeList }) => {
    const nav = useNavigate()

    const { recipeId } = useParams()
    // const index = recipeList.findIndex(recipe => recipe.id == recipeId)
    // const prevrecipe = recipeList[index]
    // console.log(index)

    // Styling for divs for input
    const styled = {margin: '15px'}
    
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

    function splitBySemicolon(longEntry) {
        return longEntry.split(';')
    }
    

    // Retrieve recipe (Need a separate state object so unsaved changes are not automatically applied to recipeList)
    useEffect(() => {
        async function getRecipe() {
            const res = await fetch(`https://server-production-6a0e.up.railway.app/recipes/${recipeId}`)
            const data = await res.json()
            setRecipe(data)
        }
        getRecipe()
    }, [])
    
    const { name, description, tags, image, ingredients, method } = recipe

    const updateRecipe = async (recipe) => {
        const res = await fetch(`https://server-production-6a0e.up.railway.app/recipes/${recipeId}`,
        {
            method: 'PATCH',
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify(recipe)
        })
        // const data = await res.json()
        // console.log(data)
        // console.log(recipeList)
        // setRecipeList(...recipeList, {prevrecipe: recipe})
        // alert('Recipe successfully created!')
        nav(`/recipe/${recipeId}`)
    }

    function updateEntry(evt) {
        setRecipe({
            ...recipe,
            [evt.target.id]: evt.target.value
        })
    }


    function submit(evt) {
        evt.preventDefault()
        updateRecipe(recipe)
        // console.log(recipeList)
        updateRecipeList(recipe)
        // setRecipeList([...recipeList, recipe])
    }

    function updateRecipeList(recipe) {
        console.log(recipeList)
        const newRecipeList = [...recipeList]
        // or even better
        // const newRecipeList = JSON.parse(JSON.stringify(recipeList))
        const indexToEdit = newRecipeList.findIndex((recipe) => recipe.id == recipeId)
        newRecipeList[indexToEdit].name = name
        newRecipeList[indexToEdit].description = description
        newRecipeList[indexToEdit].tags = splitBySemicolon(tags)
        newRecipeList[indexToEdit].image = image
        newRecipeList[indexToEdit].ingredients = splitBySemicolon(ingredients)
        newRecipeList[indexToEdit].method = splitBySemicolon(method)
        setRecipeList(newRecipeList)
        console.log(recipeList)
    }

  return (
    <>
        <div className="h-100 d-flex flex-column align-items-center justify-content-center m-5">
            <h1>Edit recipe</h1>
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
                <input type="submit" className="btn btn-primary btn-lg mx-3" value="Update recipe"/>
            </form>
        </div>
    </>
    )
}

// fieldset

export default EditRecipe
