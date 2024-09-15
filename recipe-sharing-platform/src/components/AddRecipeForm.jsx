import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function AddRecipeForm() {
    const [title, setTitle] = useState('');
    const [ingredients, setIngredients] = useState('');
    const [instructions, setInstructions] = useState('');
    const [errors, setErrors] = useState({});

    const validateForm = () => {
        const newErrors = {};
        if (!title) newErrors.title = 'Title is required';
        if (!ingredients) newErrors.ingredients = 'Ingredients are required';
        if (!instructions) newErrors.instructions = 'Preparation steps are required';
        if (ingredients.split(',').length < 2) newErrors.ingredients = 'Please include at least two ingredients';
        return newErrors;
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const formErrors = validateForm();
        if (Object.keys(formErrors).length === 0) {
            const newRecipe = {
                id: Date.now(), // Just a placeholder for unique ID
                title,
                ingredients: ingredients.split(',').map(ingredient => ingredient.trim()),
                instructions: instructions.split('.').map(instruction => instruction.trim()),
            };
            console.log('New Recipe:', newRecipe);

            setTitle('');
            setIngredients('');
            setInstructions('');
            setErrors({});
        } else {
            setErrors(formErrors);
        }
    };

    return (
        <div className="container mx-auto size-[500px] p-4">
            <h1 className="text-4xl text-center font-bold my-8 sm:text-2xl md:text-3xl">Add New Recipe</h1>
            <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
                        Recipe Title
                    </label>
                    <input
                        type="text"
                        id="title"
                        value={title}
                        onChange={(event) => setTitle(event.target.value)}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                    {errors.title && <p className="text-red-500 text-xs italic">{errors.title}</p>}
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="ingredients">
                        Ingredients (comma separated)
                    </label>
                    <textarea
                        id="ingredients"
                        value={ingredients}
                        onChange={(event) => setIngredients(event.target.value)}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                    {errors.ingredients && <p className="text-red-500 text-xs italic">{errors.ingredients}</p>}
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="instructions">
                        Preparation Steps (period separated)
                    </label>
                    <textarea
                        id="instructions"
                        value={instructions}
                        onChange={(event) => setInstructions(event.target.value)}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                    {errors.instructions && <p className="text-red-500 text-xs italic">{errors.instructions}</p>}
                </div>
                <div className="flex items-center justify-between">
                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                        Add Recipe
                    </button>
                </div>
            </form>
        </div>
    );
}