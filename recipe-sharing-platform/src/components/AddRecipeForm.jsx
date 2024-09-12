import React, { useState } from 'react';

const AddRecipeForm = () => {
  // State to hold form input values
  const [formData, setFormData] = useState({
    title: '',
    ingredients: '',
    steps: '',
  });

  // State to hold validation errors
  const [errors, setErrors] = useState({});

  // Function to validate form input
  const validateForm = () => {
    const { title, ingredients, steps } = formData;
    const errors = {};
    if (!title) errors.title = 'Title is required';
    if (!ingredients) errors.ingredients = 'Ingredients are required';
    if (!steps) errors.steps = 'Preparation steps are required';
    return errors;
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission
    const errors = validateForm(); // Validate form inputs
    if (Object.keys(errors).length === 0) {
      // If no validation errors, submit the form
      console.log('Form data submitted:', formData);
      // Optionally, you can reset the form or redirect the user
      setFormData({
        title: '',
        ingredients: '',
        steps: '',
      });
    } else {
      // If validation errors, set errors in state
      setErrors(errors);
    }
  };

  // Function to handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target; // Destructure name and value from event target
    setFormData({
      ...formData,
      [name]: value, // Update formData with new value
    });
  };

  return (
    <div className="max-w-lg mx-auto p-4 bg-white rounded-lg shadow-lg mt-6">
      <h1 className="text-2xl font-bold mb-4">Add a New Recipe</h1>
      <form onSubmit={handleSubmit}>
        {/* Recipe Title Field */}
        <div className="mb-4">
          <label htmlFor="title" className="block text-gray-700 font-medium mb-2">Recipe Title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange} // Handle change events
            className="w-full p-2 border border-gray-300 rounded-md"
          />
          {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title}</p>}
        </div>

        {/* Ingredients Field */}
        <div className="mb-4">
          <label htmlFor="ingredients" className="block text-gray-700 font-medium mb-2">Ingredients</label>
          <textarea
            id="ingredients"
            name="ingredients"
            value={formData.ingredients}
            onChange={handleChange} // Handle change events
            rows="4"
            className="w-full p-2 border border-gray-300 rounded-md"
          />
          {errors.ingredients && <p className="text-red-500 text-sm mt-1">{errors.ingredients}</p>}
        </div>

        {/* Preparation Steps Field */}
        <div className="mb-4">
          <label htmlFor="steps" className="block text-gray-700 font-medium mb-2">Preparation Steps</label>
          <textarea
            id="steps"
            name="steps"
            value={formData.steps}
            onChange={handleChange} // Handle change events
            rows="6"
            className="w-full p-2 border border-gray-300 rounded-md"
          />
          {errors.steps && <p className="text-red-500 text-sm mt-1">{errors.steps}</p>}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition"
        >
          Submit Recipe
        </button>
      </form>
    </div>
  );
};

export default AddRecipeForm;
