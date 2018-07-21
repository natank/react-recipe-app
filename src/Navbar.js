import React, { Component } from 'react';
import './Navbar.css';
class Navbar extends Component {
  render() {
    return (
      <div className="Navbar clearfix">
      	<div className="Navbar__Logo">
      		<a href="#" className="Navbar__Logo__Link">Recipe App</a>
      	</div>
      	<ul className="Navbar__Nav">
      		<li><a href="#">New Recipe</a></li>
      		<li><a href="#">Home</a></li>
      		<li><a href="#">About</a></li>
      		<li><a href="#">Contuct Us</a></li>
      	</ul>
      </div>
    );
  }
}

export default Navbar;
