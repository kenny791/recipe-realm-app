import React, { useState } from 'react'

export default () => {
  const [rating, setRating] = useState(0)

  const handleClick = (event) => {
    const list = event.target.parentNode.children
    const index = Array.from(list).indexOf(event.target)
    setRating(index + 1)
  }

const stars = []
  for (let i = 0; i < 5; i++) {
    if (i < rating) {
      stars.push(<span key={i} onClick={handleClick}>★️️️️️</span>)
    } else {
      stars.push(<span key={i} onClick={handleClick}>☆</span>)
    }
  }

  return (
    <div className='container'>
      {stars}
    </div>
  )
}