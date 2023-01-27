import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default () => {
	const [isOpen, setIsOpen] = useState(false)
	const handleLinkClick = () => setIsOpen(false)
	return (
		<nav className="navbar  fixed-top  navbar-expand-lg navbar-light bg-light">
			<div className="container-fluid">
				<Link className="navbar-brand" to="/">Recipe Realm</Link>
				<button className="navbar-toggler" type="button" onClick={() => setIsOpen(!isOpen)}>
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`}>
					<ul className="navbar-nav mb-2 mb-lg-0">
						<li className="nav-item">
							<Link className="nav-link" onClick={handleLinkClick} to="/search" >Search</Link>
						</li>
						<li className="nav-item" >
							<Link className="nav-link" onClick={handleLinkClick} to="/recipe">Recipes</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" onClick={handleLinkClick} to="/user">Profile</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" onClick={handleLinkClick} to="/">Log-in</Link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	)
}