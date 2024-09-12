import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const RecipeDetail = () => {
  const { id } = useParams(); // Get the recipe ID from the URL
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    // Fetch the recipe details based on the ID
    fetch('/data.json')
      .then((response) => response.json())
      .then((data) => {
        const recipeData = data.find((item) => item.id === parseInt(id));
        setRecipe(recipeData);
      })
      .catch((error) => console.error('Error fetching recipe details:', error));
  }, [id]);

  if (!recipe) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-64 object-cover rounded-t-lg"
        />
        <h1 className="text-3xl font-bold mt-4">{recipe.title}</h1>
        <div className="mt-4">
          <h2 className="text-xl font-semibold">Ingredients</h2>
          <ul className="list-disc ml-5 mt-2">
            {recipe.ingredients && recipe.ingredients.map((ingredient, index) => (
              <li key={index} className="text-gray-700">{ingredient}</li>
            ))}
          </ul>
        </div>
        <div className="mt-4">
          <h2 className="text-xl font-semibold">Cooking Instructions</h2>
          <p className="text-gray-700 mt-2">{recipe.instructions}</p>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;
