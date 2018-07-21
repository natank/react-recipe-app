import React, { Component } from 'react';
import RecipeHeader from "./RecipeHeader"
import RecipeIngredients from "./RecipeIngredients"
import RecipeInstructions from "./RecipeInstructions"

import './RecipeCard.css';

class RecipeCard extends Component {
  render() {
  	const {image, title, ingredients, instructions} = this.props;
    return (
      <div className="RecipeCard">
        
        <RecipeHeader 
        	image={image} 
        	title={title}
        />
        <div class="container">
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