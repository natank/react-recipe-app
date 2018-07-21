import React, { Component } from 'react';

class RecipeHeader extends Component {
  static defaultProps = {
  	image: {src: "images/basil-dinner-food-8500.jpg", alt: "pasta"},
  	title: "Default title"
  } 
  render() { 
    const {image, title} = this.props;
    return (
      <div className="RecipeHeader">        
        <img className="RecipeCard__img" 
        	src = {image.src} 
        	alt= {image.alt}
        />
        <div className="container">
        	<h1 className="RecipeHeader__title">{title}</h1>
        </div>
      </div>
    );
  }
}

export default RecipeHeader;