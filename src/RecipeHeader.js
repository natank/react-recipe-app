import React, { Component } from 'react';

class RecipeHeader extends Component {
  render() {
    return (
      <div className="RecipeHeader">        
        <img className="RecipeCard__img" 
        	src = {this.props.image.src} 
        	alt= {this.props.image.alt}
        />
        <div class="container">
        	<h1 className="RecipeHeader__title">{this.props.title}</h1>
        </div>
      </div>
    );
  }
}

export default RecipeHeader;