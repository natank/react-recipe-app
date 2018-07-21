import React, { Component } from 'react';

class RecipeIngredients extends Component {
  
  render() {
    return (
 	  
      <div className="RecipeIngredients">        
      	<h2>Ingredients:</h2>
      	<ul>
      	{
      		this.props.ingredients.map((ing, ind) =>
      			 <li key={ind}>{ing}</li>
      		)
      	}
      	</ul>
      </div>
    );
  }
}

export default RecipeIngredients;