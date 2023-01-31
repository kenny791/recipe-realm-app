import React, { useState } from 'react'

export default ({recipeRating}) => {
  
  const averageRating = recipeRating.reduce((acc, curr) => acc + curr.rating, 0) / recipeRating.length

  const [rating, setRating] = useState(0)

  const handleClick = (event) => {
    const list = event.target.parentNode.children
    const index = Array.from(list).indexOf(event.target)
    setRating(index + 1)
  }

const stars = []
  for (let i = 0; i < 5; i++) {
    if (i < rating) {
      stars.push(<span style={{ cursor: 'pointer'}} key={i} onClick={handleClick}>★️️️️️</span>)
    } else {
      stars.push(<span style={{ cursor: 'pointer'}} key={i} onClick={handleClick}>☆</span>)
    }
  }

  return (
    <div className='container'>
      {stars}
    </div>
  )
}