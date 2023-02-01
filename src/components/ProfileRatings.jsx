import React from 'react'
import { Link } from 'react-router-dom'

export default ({loggedInUser, setLoggedInUser, recipeList}) => {


    // adds the user's rating and comment to the recipe object
    for (let i = 0; i < recipeList.length; i++) {
        let rating = recipeList[i].rating_list.find((rating) => rating.username.username === loggedInUser.username)
        recipeList[i].rating = rating ? rating.rating : null
    }
    //loop through object if ratings is not null, add to ratings object with recipe name and id
    const ratings = Object.values(recipeList).map((recipe, index) => {
        if (recipe.rating !== null) {
            return (
                <div className="container text-center" key={index}>
                    <Link to={`/recipe/${recipe.id}`}>
                    <h3>{recipe.name}</h3>
                    <p>{recipe.rating}</p>
                    </Link>
                </div>
            )
        }
    })

  return (
    <div className="container text-center">
      <h2>Ratings</h2>
      <div className="container text-center">
      {ratings}
      </div>
    </div>
  )
}
