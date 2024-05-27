import { BrowserRouter } from 'react-router-dom'
import { Header } from './components/Header'
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import { Recipe } from './components/Recipe'
import { Detail } from './components/Detail'
import { useState } from 'react'
import { useEffect } from 'react'
import recipe from './data/recipe.json'
import { Login } from './components/Login'
import { Register } from './components/Register'
// import produce from "immer"

function App() {

  const [recipeData, setRecipeData] = useState([]);
  useEffect(() => {
    const initialRecipe = recipe.data.map(recipe=>({
      ...recipe, liked :false
    }))
    setRecipeData(initialRecipe)
  }, [])

  const handleLike = (id) => {
    const likeRecipe = recipeData.map(recipe => {
        if (recipe.id === id) {
            return { ...recipe, likes:recipe.liked ?  recipe.likes - 1 : recipe.likes + 1 ,
              liked : !recipe.liked
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
          <Route index element={<Header recipeData={recipeData} />} />
          <Route path='recipe' element={<Recipe recipeData={recipeData} handleLike={handleLike} />} />
          <Route path='detail/:recipeId' element={<Detail recipeData={recipeData} handleLike={handleLike}/>} />
          <Route path='login' element={<Login/>}/>
          <Route path='register' element={<Register/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
