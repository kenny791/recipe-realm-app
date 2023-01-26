import React, { useState } from 'react'

export default (props) => {
  const [rating, setRating] = useState(0)
  console.log(props)

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