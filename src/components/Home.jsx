import React from 'react'
import { Link } from 'react-router-dom'
import './Styles.css'

const Home = ({ setSearchInput }) => {

	const handleClick = (cuisine) => {
		setSearchInput(cuisine)
	  };

 	return (
		<div className="container-fluid landing">
			{/* main landing */}
			<div className="text-center hero">
				{/* backdrop image */}
				<img src="https://images.unsplash.com/photo-1592417817098-8fd3d9eb14a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587&q=80" className="img-fluid backdrop" alt="Responsive image"/>
				{/* hero */}
				<p className="display-1">Recipe Realm</p>
				<p className="display-6">Lorem ipsum dolor sit </p>
				<div className="col-lg-6 mx-auto">
					<div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
						<div className="input-group mb-3 ">
							<input className="form-control" id="floatingInput" placeholder="Search" />
							<button className="btn btn-outline-secondary" type="button" id="button-addon2" style={{backgroundColor: "lightGray", }}>Go!</button>
						</div>
					</div>
				</div>
			</div>
			{/* featured recipe */}
			<div className="row d-flex align-items-center mt-5 featured-recipe">
				<div className="col-lg-6 ">
					<Link to="/recipe">
					<img src="https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" className="img-fluid rounded featured-img" alt="place holder" />
					</Link>
				</div>
					<div className="col-lg-6">
						<Link className="featured-recipe-link" to="/recipe">
							<div>
							<p className="text-center h1 mt-3">Recipe Of The Day</p>
							<br />
							<p className="h4">Recipe Name</p>
							<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo earum consequuntur architecto soluta voluptatem, dolores dignissimos. Consectetur numquam cum aliquam qui quisquam repellendus, suscipit, fugiat obcaecati, modi veniam fugit magni.</p>
							</div>
						</Link>					
					</div>
			</div>
			{/* carousel */}
			<div>
				<div id="carouselExample" className="carousel slide mt-5">
					<div className="carousel-inner">
						<Link className="carousel-link" to="/search" onClick={handleClick("chicken")}>
							<div className="carousel-item active ">
								<img src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" className=" backdrop rounded" alt="..."/>
								<p className="text-center h1 mt-5">Cuisine 1</p>
							</div>
						</Link>
						<Link className="carousel-link" to="/search" onClick={handleClick("noodles")}>
							<div className="carousel-item">
								<img src="https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1560&q=80" className=" backdrop rounded " alt="..."/>
								<p className="text-center h1 mt-5">Cuisine 2</p>
							</div>
						</Link>
						<Link className="carousel-link" to="/search" onClick={handleClick("spicy")}>
							<div className="carousel-item ">
									<img src="https://images.unsplash.com/photo-1597589022928-bb4002c099ec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80" className="backdrop rounded" alt="..."/>
									<p className="text-center h1 mt-5">Cuisine 3</p>
							</div>
						</Link>
						<Link className="carousel-link" to="/search">
							<div className="carousel-item ">
									<img src="https://i.imgur.com/2hr32KA.jpeg" className="backdrop rounded" alt="..."/>
									<p className="text-center h1 mt-5">Cuisine 4</p>
							</div>
						</Link>
					</div>
					<button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
						<span className="carousel-control-prev-icon" aria-hidden="true"></span>
						<span className="visually-hidden">Previous</span>
					</button>
					<button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
						<span className="carousel-control-next-icon" aria-hidden="true"></span>
						<span className="visually-hidden">Next</span>
					</button>
				</div>	
			</div>
		
		</div>

    )
}

export default Home


