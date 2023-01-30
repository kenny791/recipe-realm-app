import React, { useState } from 'react'

export default () => {
  const [favourite, setFavourite] = useState(false)

  const handleClick = () => {
    setFavourite(!favourite)
  }

  return (
    <>
      {/* <button type="button" className={favourite ? "btn btn-success" : "btn btn-danger"} onClick={handleClick} data-bs-toggle="button" autoComplete="off">Favourite</button> */}
      <button type="button" className={favourite ? "btn btn-success" : "btn btn-danger"} onClick={handleClick} data-bs-toggle="button" autoComplete="off">{favourite ? "Added" : "Favourite"}</button>
    </>
  )
}
