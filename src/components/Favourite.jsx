import React, { useState } from 'react'

export default ({ recipe, loggedInUser }) => {

  const isFavourite = () => {
    for (let fav of loggedInUser.favourites) {
      if (recipe._id === fav._id) {
        return true
      }
    }
    return false
  }

  const [favourite, setFavourite] = useState(isFavourite)

  const handleClick = () => {
    setFavourite(!favourite)
    updateFavourites()
  }

  const updateFavourites = async () => {
    const res = await fetch(`https://server-production-6a0e.up.railway.app/users/${loggedInUser._id}`,
    {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        favourites: [...loggedInUser.favourites,
          recipe]
      })
    })
    const data = await res.json()
    console.log(data)
  }

  return (
    <>
      <button 
        type="button" 
        className={favourite ? "btn btn-success" : "btn btn-danger"} 
        onClick={handleClick} data-bs-toggle="button" 
        autoComplete="off">{favourite ? "Added" : "Favourite"}
      </button>
    </>
  )
}
