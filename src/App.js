import React, { Component } from 'react';
import Navbar from './Navbar'
import RecipeCard from './RecipeCard'
import RecipeIngredients from './RecipeIngredients'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <div className= "row clearfix">
          <RecipeCard 
            image = {{src: "images/basil-dinner-food-8500.jpg", 
            alt: "pasta"}}
            title = { "Spaghetti" }
            instructions= {"Open jar of Spaghetti sauce. Bring to simmer. Boil water. Cook pasta until done. \
                            Combine pasta and sause"} 
            ingredients = {["pasta", "8 cups of water", "1 box of spaghetti"]} 
          />
          <RecipeCard 
            image = {{src: "images/basil-dinner-food-8500.jpg", 
            alt: "pasta"}}
            title = { "Spaghetti" }
            instructions= {"Open jar of Spaghetti sauce. Bring to simmer. Boil water. Cook pasta until done. \
                            Combine pasta and sause"} 
            ingredients = {["pasta", "8 cups of water", "1 box of spaghetti"]} 
          />
          <RecipeCard 
            image = {{src: "images/basil-dinner-food-8500.jpg", 
            alt: "pasta"}}
            title = { "Spaghetti" }
            ingredients = {["pasta", "8 cups of water", "1 box of spaghetti"]} 
          />
        </div>

      </div>
    );
  }
}

export default App;
