import React from 'react'

export default () => {
  return (
    <>
			
			{/* Search bar */}
			{/* mb is margin bottom; w is width */}
      <div class="form-floating mb-3 w-75">
        <input class="form-control" id="floatingInput" />
        <label for="floatingInput">Search</label>
      </div>
			{/* Filter dropdowns */}
			{/* Still need to figure out how to make all boxes same size  */}
			<div class="d-flex flex-wrap align-items-center p-2 w-75">
				<div class="p-2 flex-fill">
					<div class="form-floating">
						<select class="form-select" id="floatingSelect" aria-label="Floating label select example">
							<option selected>Cuisine</option>
							<option value="1">One</option>
							<option value="2">Two</option>
							<option value="3">Mediterranean</option>
						</select>
						<label for="floatingSelect">Filter</label>
					</div>
				</div>
				<div class="p-2 flex-fill">
					<div class="form-floating">
						<select class="form-select" id="floatingSelect" aria-label="Floating label select example">
							<option selected>Dietary</option>
							<option value="1">One</option>
							<option value="2">Two</option>
							<option value="3">Gluten Free</option>
						</select>
						<label for="floatingSelect">Filter</label>
					</div>
				</div>
				<div class="p-2 flex-fill">
					<div class="form-floating">
						<select class="form-select" id="floatingSelect" aria-label="Floating label select example">
							<option selected>Difficulty</option>
							<option value="1">One</option>
							<option value="2">Two</option>
							<option value="3">Three</option>
						</select>
						<label for="floatingSelect">Filter</label>
					</div>
				</div>
				<div class="p-2 flex-fill">
				<div class="form-floating">
					<select class="form-select" id="floatingSelect" aria-label="Floating label select example">
						<option selected>Other</option>
						<option value="1">One</option>
						<option value="2">Two</option>
						<option value="3">Three</option>
					</select>
					<label for="floatingSelect">Filter</label>
				</div>
			</div>
			</div>
			
    </>
  )
}