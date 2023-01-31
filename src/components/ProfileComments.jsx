import React from 'react'
import { Link } from 'react-router-dom'

export default ({loggedInUser, setLoggedInUser, recipeList}) => {





 

    

    


  const extractIds = (favourites) => {
    return favourites.map((recipe) => recipe._id);
  }

  const handleClick = (recipeId) => {
    const updatedFavourites = loggedInUser.favourites.filter((recipe) => recipe.id !== recipeId)
    setLoggedInUser({ ...loggedInUser, favourites: updatedFavourites })
    sendData(extractIds(updatedFavourites))
  }


  const sendData = async (favourites) => {
    try {
      const response = await fetch(`http://localhost:8080/users/${loggedInUser._id}/favourites`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(
          {
          "favourites": favourites
          }
          )
      })
      const data = await response.json()
      console.log(data)
    } catch (error) {
      console.error(error)
    }
  }
 



    for (let i = 0; i < recipeList.length; i++) {
        let comment = recipeList[i].comments.find((comment) => comment.username.username === loggedInUser.username)
        recipeList[i].comment = comment ? comment.comment : null
        }

    //loop through object if ratings is not null, add to ratings object with recipe name and id
    const comments = Object.values(recipeList).map(recipe => {
        if (recipe.comment !== null) {
            return (
                <div className="container text-center">
                    <Link to={`/recipe/${recipe.id}`}>
                    <h3>{recipe.name}</h3>
                    <p>{recipe.comment}</p>
                    </Link>
                </div>
            )
        }
    })


  return (
    <div className="container text-center">
      <h2>Comments</h2>
      <div class="container text-center">
      {comments}
      </div>
    </div>
  )
}
