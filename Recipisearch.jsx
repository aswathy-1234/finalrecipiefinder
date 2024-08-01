
import React, { useState, useEffect } from 'react';
import RecipeDetails from './RecipeDetails';
import RecipeList from './RecipeList';
import './RecipeSearch.css';

const RecipeSearch = ({ onPageChange }) => {
  const [query, setQuery] = useState('');//user input 
  const [recipes, setRecipes] = useState([]);//recipie list
  const [selectedRecipe, setSelectedRecipe] = useState(null);//selecter recipie
  const [error, setError] = useState(null);//null

  const handleSearch = async () => {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);//fetching recipies from api
    const data = await response.json(); //parse the data as a json data
    if (data.meals && data.meals.length > 0) { // If recipes are found
      setRecipes(data.meals);// Update recipes state

    } else {
      setError('No recipe found');// Set error message 
      setRecipes([]); // Clear recipes state

    }
  };
   // Effect to clear recipes and error when query is empty

  useEffect(() => {
    if (query === '') {
      setRecipes([]);// Clear recipes state
      setError(null);// Clear error message
    }
  }, [query]);// Dependency array with query

  const handleBackToStart = () => { // Function to handle back to start button click
    onPageChange('start');// Call onPageChange with 'start'
  };

  return (
    <div className="recipe-search-container">
      {!selectedRecipe && (  // If no recipe is selected also the search and input never hide
        <div>
          <h1>Get Your Recipe</h1>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)} // Update query state on input change
            placeholder="Enter ingredient"
            className="search-input"
          />
          <button onClick={handleSearch} className="search-button">Search</button>  {/* Search button */}
          <button onClick={handleBackToStart} className="back-to-start-button">Back to Home</button> {/* Back to home button */}
          {error && <p className="error-message">{error}</p>}{/* Display error message if exists */}
        </div>
      )}
      {!selectedRecipe? (
        <RecipeList recipes={recipes} onRecipeClick={setSelectedRecipe} />// Display RecipeList component
      ) : (
        <RecipeDetails recipe={selectedRecipe} onBack={() => setSelectedRecipe(null)} />// Display RecipeDetails component
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


        







