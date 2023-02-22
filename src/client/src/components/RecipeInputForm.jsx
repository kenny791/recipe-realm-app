import React from 'react'
import RecipeInputLine from './RecipeInputLine'
import RecipeInputBlock from './RecipeInputBlock'

export default ({ name, description, tags, image, ingredients, method, submit, updateEntry, buttonMsg}) => {
  return (
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
        <input type="submit" className="btn btn-primary btn-lg mx-3" value={buttonMsg}/>
    </form>
  )
}


