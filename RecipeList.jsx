
import React from 'react';
import './RecipeSearch.css';

const RecipeList = ({ recipes, onRecipeClick }) => {
  return (
    <div>
      <div className="recipes-container">
        {recipes.map((recipe, index) => (
          <div
            key={index}
            className="recipe-card"
            onClick={() => onRecipeClick(recipe)}
          >
            <h2>{recipe.strMeal}</h2>
            <img
              src={recipe.strMealThumb}
              alt={recipe.strMeal}
              className="recipe-image"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecipeList;

