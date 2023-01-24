import React from 'react'

export default () => {
  return (
    <>
			{/* Centre whole page */}
			<div class="h-100 d-flex flex-wrap align-items-center justify-content-center m-5">
				{/* Search bar */}
				{/* mb is margin bottom; w is width */}
				<div class="form-floating m-3 w-75">
					<input class="form-control" id="floatingInput" />
					<label for="floatingInput">Search</label>
				</div>
				{/* Filter dropdowns */}
				{/* Still need to figure out how to make all boxes same size  */}
				<div class="d-flex flex-wrap align-items-center w-75">
					{/* Dropdown one */}
					{/* Leave padding on left as 0 to align with Search bar */}
					<div class="pr-2 pt-2 pb-2 flex-fill">
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
					{/* Dropdown two */}
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
					{/* Dropdown three */}
					<div class="p-2 flex-fill">
						<div class="form-floating">
							<select class="form-select" id="floatingSelect" aria-label="Floating label select example">
								<option selected>Difficulty</option>
								<option value="1">One</option>
								<option value="2">Two</option>
								<option value="3">Attempt only if expert</option>
							</select>
							<label for="floatingSelect">Filter</label>
						</div>
					</div>
					{/* Dropdown four */}
					{/* Leave padding right as 0 to align with Search bar */}
					<div class="pt-2 pb-2 pl-2 flex-fill">
						<div class="form-floating">
							<select class="form-select" id="floatingSelect" aria-label="Floating label select example">
								<option selected>Other</option>
								<option value="1">One</option>
								<option value="2">Two</option>
								<option value="3">All other options here</option>
							</select>
							<label for="floatingSelect">Filter</label>
						</div>
					</div>
				</div>
			</div>
    </>
  )
}