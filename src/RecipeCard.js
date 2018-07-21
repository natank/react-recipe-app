import React, { Component } from 'react';
import RecipeHeader from "./RecipeHeader"
import RecipeIngredients from "./RecipeIngredients"
import RecipeInstructions from "./RecipeInstructions"

import './RecipeCard.css';

class RecipeCard extends Component {
  render() {
    return (
      <div className="RecipeCard">
        
        <RecipeHeader 
        	image={this.props.image} 
        	title={this.props.title}
        />
        
        <RecipeIngredients 
        	ingredients = {this.props.ingredients}
        />
        
        <RecipeInstructions 
        	instructions={this.props.instructions}
        />
      </div>
    );
  }
}

export default RecipeCard;