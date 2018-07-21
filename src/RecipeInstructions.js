import React, { Component } from 'react';
import './RecipeInstructions.css';
class RecipeInstructions extends Component {
  render() {
    return (
      <div className="RecipeInstructions">
        <h2>Instructions</h2>
        <p className="RecipeInstructions">{this.props.instructions}</p>
      </div>
    );
  }
}

export default RecipeInstructions;
