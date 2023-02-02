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
