
import React, { useState, useEffect } from 'react';
import RecipeDetails from './RecipeDetails';
import RecipeList from './RecipeList';
import './RecipeSearch.css';

const RecipeSearch = ({ onPageChange }) => {
  // State to hold the search query
  const [query, setQuery] = useState('');
  // State to hold the fetched recipes
  const [recipes, setRecipes] = useState([]);
  // State to hold the selected recipe's details
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  // State to hold any error messages
  const [error, setError] = useState(null);

  // Function to fetch recipes from the API
  const fetchRecipes = async () => {
    try {
      // Fetch data from the API
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
      // Check if the response is successful
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      // Parse the response JSON data
      const data = await response.json();
      // Check if there are meals in the data
      if (data && data.meals) {
        setRecipes(data.meals); // Set the recipes state with fetched meals
        setError(null); // Clear any previous errors
      } else {
        setError('No recipes found'); // Set error message if no recipes are found
        setRecipes([]); // Clear recipes state
      }
    } catch (error) {
      setError('An error occurred while fetching the recipes'); // Set error message if there's an exception
      setRecipes([]); // Clear recipes state
    }
  };

  useEffect(() => {
    if (query === '') {
      setRecipes([]); // Reset recipes state when query is empty
    }
  }, [query]);

  const handleBackToStart = () => {
    onPageChange('start');
  };

  return (
    <div className="recipe-search-container">
      {!selectedRecipe && (
        <div>
          <h1>Get Your Recipie</h1>
          {/* Input field for the user to type the ingredient they want to search */}
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)} // Update the query state as user types
            placeholder="Enter ingredient"
            className="search-input"
          />
          {/* Button to trigger the recipe search */}
          <button onClick={fetchRecipes} className="search-button">Search</button>
          {/* Button to go back to the start page */}
          <button onClick={handleBackToStart} className="back-to-start-button">Back to Home</button>
          {/* Display error message if there's any */}
          {/* <p className="error-message">{error || 'No errors'}</p> */}
        </div>
      )}
      {/* Conditionally render RecipeList or RecipeDetails based on whether a recipe is selected */}
      {!selectedRecipe ? (
        <RecipeList
          recipes={recipes} // Pass the recipes to RecipeList component
          onRecipeClick={(recipe) => setSelectedRecipe(recipe)} // Set the selected recipe when a recipe is clicked
        />
      ) : (
        <RecipeDetails
          recipe={selectedRecipe} // Pass the selected recipe to RecipeDetails component
          onBack={() => setSelectedRecipe(null)} // Clear the selected recipe when the back button is clicked
        />
      )}
    </div>
  );
};

export default RecipeSearch;







