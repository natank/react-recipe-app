import React, { Component } from 'react';
import RecipeHeader from "./RecipeHeader"
import RecipeIngredients from "./RecipeIngredients"
import RecipeInstructions from "./RecipeInstructions"

import './RecipeCard.css';

class RecipeCard extends Component {
  static defaultProps = {
  	image: {src: "images/basil-dinner-food-8500.jpg", alt: "pasta"},
  	title: "Default title",
  	ingredients: ["pasta", "salt"],
  	instructions: "No instructions yet"
  }
  render() {
  	const {image, title, ingredients, instructions} = this.props;
    return (
      <div className="RecipeCard">
        
        <RecipeHeader 
        	image={image} 
        	title={title}
        />
        <div className="container">
	        <RecipeIngredients 
	        	ingredients = {ingredients}
	        />
	        
	        <RecipeInstructions 
	        	instructions={instructions}
	        />
        </div>
      </div>
    );
  }
}

export default RecipeCard;