import React,{useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import './Styles.css'

const Home = ({ setSearchInput , recipeList }) => {
	
	// Scroll to top on page load
	useEffect(() => { window.scrollTo(0, 0) }, [])

	//handles prefilling of search page
	const handleClick = (prefillSearch ) => {
		setSearchInput(prefillSearch)
	};
	//handles search input change
	const handleChange = (event) => {
		setSearchInput(event.target.value)
	}

	//find highest rated recipe for featured recipe and image url
	let highest_average_rating = 0;
	let highest_rated_recipe = ""
	for (let i = 0; i < recipeList.length; i++) {
		let total_rating = 0
	for (let j = 0; j < recipeList[i].rating_list.length; j++) {
		total_rating += recipeList[i].rating_list[j].rating
	}
	let average_rating = total_rating / recipeList[i].rating_list.length
	if (average_rating > highest_average_rating) {
		highest_average_rating = average_rating
		highest_rated_recipe = recipeList[i]
	}
	}
	

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
							<input className="form-control" id="floatingInput" placeholder="Search" onChange={handleChange}  />
							<Link to="/search">
							<button className="btn btn-outline-secondary" type="button" id="button-addon2" style={{backgroundColor: "lightGray", }}>Go!</button>
							</Link>
						</div>
					</div>
				</div>
			</div>
			{/* featured recipe */}
			<div className="row d-flex align-items-center mt-5 featured-recipe">
				<div className="col-lg-6 ">
					<Link to={`/recipe/${highest_rated_recipe.id}`}>
					<img src={highest_rated_recipe.image} className="img-fluid rounded featured-img" alt="place holder" />
					</Link>
				</div>
					<div className="col-lg-6">
						<Link className="featured-recipe-link" to={`/recipe/${highest_rated_recipe.id}`}>
							<div>
							<p className="text-center h1 my-4">Featured Recipe</p>
							<p className="h4">{highest_rated_recipe.name}</p>
							<p>{highest_rated_recipe.description}</p>
							</div>
						</Link>					
					</div>
			</div>
			{/* carousel */}
			<div>
				<div id="carouselExample" className="carousel slide mt-5">
					<div className="carousel-inner">
						<Link className="carousel-link" to="/search" onClick={() => handleClick("spicy")}>
							<div className="carousel-item active ">
								<img src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" className=" backdrop rounded" alt="..."/>
								<p className="text-center display-1 mt-5">SPICY</p>
							</div>
						</Link>
						<Link className="carousel-link" to="/search" onClick={() => handleClick("noodles")}>
							<div className="carousel-item">
								<img src="https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1560&q=80" className=" backdrop rounded " alt="..."/>
								<p className="text-center display-1 mt-5">NOODLES</p>
							</div>
						</Link>
						<Link className="carousel-link" to="/search" onClick={() => handleClick("vegan")}>
							<div className="carousel-item ">
									<img src="https://images.unsplash.com/photo-1597589022928-bb4002c099ec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80" className="backdrop rounded" alt="..."/>
									<p className="text-center display-1 mt-5">VEGAN</p>
							</div>
						</Link>
						<Link className="carousel-link" to="/search" onClick={() => handleClick("salad")}>
							<div className="carousel-item ">
									<img src="https://i.imgur.com/2hr32KA.jpeg" className="backdrop rounded" alt="..."/>
									<p className="text-center display-1 mt-5">SALAD</p>
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


