import React, { useState,useEffect } from 'react'
import { Link } from 'react-router-dom'

export default ({ setSearchInput }) => {
	const [isOpen, setIsOpen] = useState(false)
	const handleLinkClick = () => setIsOpen(false)
	const [navbarClass, setNavbarClass] = useState("")
	const [isLoggedIn, setIsLoggedIn] = useState(true)

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 70) {
				setNavbarClass("scrolled")
		  	} 	else {
			setNavbarClass("")
		  	}
		}
		window.addEventListener("scroll", handleScroll)
			return () => {
		  		window.removeEventListener("scroll", handleScroll)
			}
	}, [])
		
	const ListLink = ({ isSmallNav, to, textToDisplay }) => {
		return (
			<li className="nav-item">
				<Link className="nav-link" onClick={() => { isSmallNav ? handleLinkClick() : null; setSearchInput("")}}  to={to}>
				{textToDisplay}
				</Link>
			</li>
		)
	}


	return (
		<div className="container-fluid">
			{/* large navbar */}
			<div className="d-none d-md-block" >
				<nav className={`navbar large fixed-top  navbar-expand-md   ${navbarClass}`}>
					<div className="container-fluid">
						<Link className="navbar-brand" to="/">RR</Link>
						<ul className="navbar-nav mb-2 mb-md-0 ms-auto">
							<ListLink isSmallNav={false} to="/search" textToDisplay="Search" />
							<ListLink isSmallNav={false} to="/recipe" textToDisplay="Recipes" />
							<ListLink isSmallNav={false} to={isLoggedIn ? "/user" : "/login"} textToDisplay={isLoggedIn ? "Profile" : "Login"} />
							</ul>
					</div>
				</nav>
			</div>
			{/* small navbar */}
			<div className="d-block d-md-none ">
				<nav className="navbar compact fixed-top  navbar-expand-md ">
					<div className="container-fluid">
						<Link className="navbar-brand" onClick={handleLinkClick} to="/">RR</Link>
						<button className="navbar-toggler" type="button" onClick={() => setIsOpen(!isOpen)}>
							<span className="navbar-toggler-icon"></span>
						</button>
						<div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}>
							<ul className="navbar-nav mb-2 mb-lg-0 ms-auto">
								<ListLink isSmallNav={true} to="/search" textToDisplay="Search" />
								<ListLink isSmallNav={true} to="/recipe" textToDisplay="Recipes" />
								<ListLink isSmallNav={true} to={isLoggedIn ? "/user" : "/login"} textToDisplay={isLoggedIn ? "Profile" : "Login"} />
							</ul>
						</div>
					</div>
				</nav>
			</div>
		</div>
	)
}