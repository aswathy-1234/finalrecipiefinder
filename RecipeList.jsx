
import React from 'react';
import './RecipeSearch.css';

const RecipeList = ({ recipes, onRecipeClick }) => { //2 props recipies & recipiselection
  return (
    <div>
      <div className="recipes-container">{/* Container for recipes */}
        {recipes.map((recipe, index) => (  //map over the recipies array
          <div
            key={index} // Unique key for each recipe
            className="recipe-card"
            onClick={() => onRecipeClick(recipe)} // Handle click event to select recipe
          >
            <h2>{recipe.strMeal}</h2> {/* Display recipe name */}
            <img
              src={recipe.strMealThumb}// Source of recipe image
              alt={recipe.strMeal} // Alt text for image
              className="recipe-image" // Class for styling recipe image
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecipeList;


