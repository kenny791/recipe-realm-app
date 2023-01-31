import React, { useState } from "react"


const NewRecipe = ({ loggedInUser, setRecipeList }) => {
//   const { category } = useParams()
//   const [entry, setEntry] = useState('')

//   function submit(evt) {
//     evt.preventDefault()
//     addEntry(category, entry)
//   }

  return (
    <>
      <h2>Submit a New Recipe</h2>
      {/* <form onSubmit={submit} className="container">
        <div>
          <textarea value={entry} onChange={(evt) => setEntry(evt.target.value)} rows="10" className="form-control"></textarea>
        </div>
        <button className="btn btn-primary mt-2">Create Entry</button>
      </form> */}
    </>
  )
}

export default NewRecipe
