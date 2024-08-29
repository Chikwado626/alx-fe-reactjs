import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeDetails from './components/RecipeDetails';
import './App.css';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/add' element={<AddRecipeForm />} />
          <Route path="/" element={<RecipeList />} />
          <Route path="/recipes" element={<RecipeDetails />} />
        </Routes>
      </Router>
    </>
  )
}

export default App