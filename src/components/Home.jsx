import React from 'react'
import './Styles.css'

const Home = () => {

 	return (
		<div className="container-fluid">
			<img src="https://images.unsplash.com/photo-1592417817098-8fd3d9eb14a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587&q=80" className="img-fluid backdrop" alt="Responsive image"/>
			<div className="text-center hero">
				<h1 className="display-5 fw-bold">Recipe Realm</h1>
				<h3>Lorem ipsum dolor sit </h3>
				<div className="col-lg-6 mx-auto">
					<div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
						<div className="input-group mb-3 ">
							<input className="form-control" id="floatingInput" placeholder="Search" />
							<button className="btn btn-outline-secondary" type="button" id="button-addon2">Go!</button>
						</div>
					</div>
				</div>
			</div>

			<div className="row">
				<h2 className="text-center">Featured Recipe</h2>
				{/* right aligned image div, only visible med size and larger*/}
				<div className="col-12 col-md-6 d-none d-md-block" >
					<img src="https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" className="img-fluid rounded float-end" alt="place holder" />
				</div>
				{/* center aligned image div, only visible small screen and smaller */}
				<div className="col-12 col-md-6 d-block d-md-none ">
					<img src="https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" className="img-fluid rounded mx-auto" alt="place holder" />
				</div>
				<div className="col-12 col-md-6">
					<h2>Recipe Name</h2>
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo earum consequuntur architecto soluta voluptatem, dolores dignissimos. Consectetur numquam cum aliquam qui quisquam repellendus, suscipit, fugiat obcaecati, modi veniam fugit magni.</p>
				</div>
			</div>
		</div>
    )
}

export default Home


