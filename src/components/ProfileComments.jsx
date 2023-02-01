import React, {useState} from 'react'
import { Link } from 'react-router-dom'

export default ({loggedInUser, recipeList, setRecipeList}) => {

    //on click remove comment from recipeList
  const handleClick = (commentId, recipeId) => {
    sendData(commentId, recipeId)
    setRecipeList(recipeList.filter((recipe) => recipe._id !== recipeId))
    }

  const sendData = async (commentId, recipeId) => {
    try {
        const response = await fetch(`http://localhost:8080/recipes/${recipeId}/comments/${commentId}`, {
            method: "DELETE",
            headers: {
            "Content-Type": "application/json"
            }
        })
        const data = await response.json()
        console.log(data)
    }   catch (error) {
        console.error(error)
    }
  }
 
    


    // adds the user's comment to the recipe object
    for (let i = 0; i < recipeList.length; i++) {
        let comment = recipeList[i].comments.find((comment) => comment.username.username === loggedInUser.username)
        recipeList[i].comment = comment ? comment.comment : null
        recipeList[i].commentId = comment ? comment._id : null
    }



    //loop through object if ratings is not null, add to ratings object with recipe name and id
    const comments = Object.values(recipeList).map((recipe,index) => {
        if (recipe.comment !== null) {
            return (
                <div className="container text-center" key={index}>
                    
                    <Link to={`/recipe/${recipe.id}`}>
                    <h3>{recipe.name}</h3>
                    <p>{recipe.comment}</p>
                    <p>{recipe.commentId}</p>
                    <p>{recipe._id}</p>
                    </Link>
                    <div className="col-sm-1">
                    <button type="button" className="btn btn-danger" onClick={() => handleClick(recipe.commentId, recipe._id)}>Remove</button>
				    </div>
                </div>
            )
        }
    })


  return (
    <div className="container text-center">
      <h2>Comments</h2>
      <div className="container text-center">
      {comments}
      </div>
    </div>
  )
}