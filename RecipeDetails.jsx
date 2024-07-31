import React from 'react';
import './RecipeSearch.css';

const RecipeDetails = ({ recipe, onBack }) => {
  const getIngredients = (recipe) => {
    let ingredients = [];
    for (let i = 1; i <= 20; i++) {
      const ingredient = recipe[`strIngredient${i}`];
      const measure = recipe[`strMeasure${i}`];
      if (ingredient) ingredients.push(`${ingredient} - ${measure}`);
    }
    return ingredients;
  };
  return (
    <div className="recipe-details">
      <h2>{recipe.strMeal}</h2>
      <div className="row">
        <div className="recipe-image-container">
          <img src={recipe.strMealThumb} alt={recipe.strMeal} className="recipe-image" />
        </div>
        <div className="ingredients-container">
          <div className="ingredients-box">
            <h3>Ingredients</h3>
            <ul style={{ listStyle: 'none' }}>
  {getIngredients(recipe).map((ingredient, idx) => (
    <li key={idx}>{ingredient}</li>
    // <ul className="ingredients">
    // //             {ingredients.map((ingredient, idx) => (
    // //               <li key={idx}>{ingredient}</li>
    // //             ))}
    // //           </ul>
  ))}
</ul>
          </div>
        </div>
      </div>
      <div className="instructions-box">
        <h3>Preparation Method</h3>
        <p>{recipe.strInstructions}</p>
      </div>
      <button onClick={onBack} className="back-button">Back To Search Results</button>
    </div>
  );
};

export default RecipeDetails;
