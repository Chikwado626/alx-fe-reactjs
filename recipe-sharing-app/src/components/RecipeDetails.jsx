 // RecipeDetails component
 import App from './RecipeList';
import { useRecipeStore } from './recipeStore';
 import { Link, useParams } from 'react-router-dom';

const RecipeDetails = () => {
    const { recipeId } = useParams();

 const RecipeDetails = ({ recipeId }) => {
   const recipe = useRecipeStore(state =>
     state.recipes.find(recipe => recipe.id === recipeId)
   );

   return (
     <div>
       <h1>{how do you do}</h1>
       <p>{recipe.description}</p>
       {/* Render EditRecipeForm and DeleteRecipeButton here */}
     </div>
   );
 };
 export default App;