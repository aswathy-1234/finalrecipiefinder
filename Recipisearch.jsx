
import React, { useState, useEffect } from 'react';
import RecipeDetails from './RecipeDetails';
import RecipeList from './RecipeList';
import './RecipeSearch.css';

const RecipeSearch = ({ onPageChange }) => {
  const [query, setQuery] = useState('');
  const [recipes, setRecipes] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [error, setError] = useState(null);

  const handleSearch = async () => {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
    const data = await response.json();
    if (data.meals && data.meals.length > 0) {
      setRecipes(data.meals);
    } else {
      setError('No recipe found');
      setRecipes([]);
    }
  };

  useEffect(() => {
    if (query === '') {
      setRecipes([]);
      setError(null);
    }
  }, [query]);

  const handleBackToStart = () => {
    onPageChange('start');
  };

  return (
    <div className="recipe-search-container">
      {!selectedRecipe && (
        <div>
          <h1>Get Your Recipe</h1>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Enter ingredient"
            className="search-input"
          />
          <button onClick={handleSearch} className="search-button">Search</button>
          <button onClick={handleBackToStart} className="back-to-start-button">Back to Home</button>
          {error && <p className="error-message">{error}</p>}
        </div>
      )}
      {!selectedRecipe? (
        <RecipeList recipes={recipes} onRecipeClick={setSelectedRecipe} />
      ) : (
        <RecipeDetails recipe={selectedRecipe} onBack={() => setSelectedRecipe(null)} />
      )}
    </div>
  );
};

export default RecipeSearch;


// <div>
//   <h1>Get Your Recipe</h1>
//   <input
//     type="text"
//     value={query}
//     onChange={(e) => setQuery(e.target.value)}
//     placeholder="Enter ingredient"
//     className="search-input"
//   />
//   <button onClick={handleSearch} className="search-button">Search</button>
//   <button onClick={handleBackToStart} className="back-to-start-button">Back to Home</button>
//   {error && <p className="error-message">Oops, something went wrong: {error}</p>}
// </div>


        







