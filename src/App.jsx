import { BrowserRouter } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'
import recipe from './data/recipe.json'
import { RecipeContainer } from './components/RecipeContainer'
import { AllRecipes } from './components/AllRecipes'
import { DetailRecipe } from './components/DetailRecipe'
// import produce from "immer"

function App() {

  const [recipeData, setRecipeData] = useState([]);
  useEffect(() => {
    const initialRecipe = recipe.data.map(recipe => ({
      ...recipe, liked: false
    }))
    setRecipeData(initialRecipe)
  }, [])

  const handleLike = (slug) => {
    const likeRecipe = recipeData.map(recipe => {
      if (recipe.slug === slug) {
        return {
          ...recipe, likes: recipe.liked ? recipe.likes - 1 : recipe.likes + 1,
          liked: !recipe.liked
        }
      }
      return recipe;
    });
    setRecipeData(likeRecipe)
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route index element={<RecipeContainer data={recipeData} />} />
          <Route path='recipes' element={<AllRecipes data={recipeData}/>}/>
          <Route path='detail/:slug' element={<DetailRecipe data={recipeData} handleLike={handleLike}/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
