import React from 'react'

export default () => {
  return (
    <>
		{/* Centre whole page */}
		<div className="h-100 d-flex flex-column align-items-center justify-content-center m-5">
			{/* Search bar */}
			{/* mb is margin bottom; w is width */}
			<div className="form-floating m-3 w-75 ">
				{/* Need to have placeholder as uses it as a pseudoelement */}
				<input className="form-control" id="floatingInput" placeholder="samplesearchterm"/>
				<label for="floatingInput">Search</label>
			</div>
			{/* Filter dropdowns */}
			<div className="container w-75">
				<div className="row d-flex">
			
			{/* <div className="d-flex flex-wrap w-75 justify-content-center"> */}
				{/* Dropdown one */}
				<div className="col-12 col-md-6 col-lg-3 p-1 p-lg-2">
				<div className="p-0 flex-fill">
					<div className="form-floating">
						<select className="form-select" id="floatingSelect" aria-label="Floating label select example">
							<option selected>Cuisine</option>
							{/* Note can prepopulate this from some predefined array */}
							{/* After pre-population can make it more DRY */}
							<option value="1">One</option>
							<option value="2">Two</option>
							<option value="3">Mediterranean</option>
						</select>
						<label for="floatingSelect">Filter</label>
					</div>
				</div>
				</div>
				{/* Dropdown two */}
				<div className="col-12 col-md-6 col-lg-3 p-1 p-lg-2">
				<div className="p-0 flex-fill">
					<div className="form-floating">
						<select className="form-select" id="floatingSelect" aria-label="Floating label select example">
							<option selected>Dietary</option>
							<option value="1">One</option>
							<option value="2">Two</option>
							<option value="3">Gluten Free</option>
						</select>
						<label for="floatingSelect">Filter</label>
					</div>
				</div>
				</div>
				
				{/* Dropdown three */}
				<div className="col-12 col-md-6 col-lg-3 p-1 p-lg-2">
				<div className="p-0 flex-fill">
					<div className="form-floating">
						<select className="form-select" id="floatingSelect" aria-label="Floating label select example">
							<option selected>Difficulty</option>
							<option value="1">One</option>
							<option value="2">Two</option>
							<option value="3">Attempt only if expert</option>
						</select>
						<label for="floatingSelect">Filter</label>
					</div>
				</div>
				</div>
				{/* Dropdown four */}
				{/* Leave padding right as 0 to align with Search bar */}
				<div className="col-12 col-md-6 col-lg-3 p-1 p-lg-2">
				<div className="p-0 flex-fill">
					<div className="form-floating">
						<select className="form-select" id="floatingSelect" aria-label="Floating label select example">
							<option selected>Other</option>
							<option value="1">One</option>
							<option value="2">Two</option>
							<option value="3">All other options here</option>
						</select>
						<label for="floatingSelect">Filter</label>
					</div>
					</div>
				</div>
				{/* </div> */}
			</div>
			</div>

			<div className="container d-flex flex-wrap align-items-center justify-content-center mt-5 w-75">
				<div className="row g-4 g-lg-6">
					<div className="col-6 col-md-4 col-lg-3 p-1 p-lg-2">
						<img src="https://images.unsplash.com/photo-1606604830262-2e0732b12acc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1363&q=80" className="img-thumbnail" alt="..." />
					</div>
					<div className="col-6 col-md-4 col-lg-3 p-1 p-lg-2">
						<img src="https://images.unsplash.com/photo-1606604830262-2e0732b12acc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1363&q=80" className="img-thumbnail" alt="..." />
					</div>
					<div className="col-6 col-md-4 col-lg-3 p-1 p-lg-2">
						<img src="https://images.unsplash.com/photo-1606604830262-2e0732b12acc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1363&q=80" className="img-thumbnail" alt="..." />
					</div>
					<div className="col-6 col-md-4 col-lg-3 p-1 p-lg-2">
						<img src="https://loremflickr.com/320/240/fruit" className="img-thumbnail" alt="..." />
					</div>
					<div className="col-6 col-md-4 col-lg-3 p-1 p-lg-2">
						<img src="https://loremflickr.com/320/240/sushi" className="img-thumbnail" alt="..." />
					</div>
				</div>
			</div>
		</div>
    </>
  )
}