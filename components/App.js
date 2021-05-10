import React, { useState, useEffect } from 'react';
import '../css/App.css';
import RecipeList from './RecipeList';
import { v4 as uuidv4 } from 'uuid';
import RecipeEdit from './RecipeEdit';

export const RecipeContext = React.createContext()

function App() {
  const [recipes, setRecipes] = useState(recipeArray)
  const [selectedRecipeId, setSelectedRecipeId] = useState()

  const selectedRecipe = recipes.find(recipe => recipe.id === selectedRecipeId)

  const LOCAL_STORAGE_KEY = 'cookingWithReact.recipes';
  //SAVE to LOCAL STORAGE
  useEffect(() => {
    const recipeJSON = localStorage.getItem(LOCAL_STORAGE_KEY)
    if (recipeJSON != null) setRecipes(JSON.parse(recipeJSON))
  }, [])
  //LOAD from LOCAL STORAGE
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(recipes))
  }, [recipes])

  //Handling Selected Recipes ID
  function handleRecipeSelect(id) {
    setSelectedRecipeId(id)
  }

  //Handle Recipe Edit
  function handleRecipeChange(recipe, id) {
    const newRecipe = [...recipes]
    const index = newRecipe.findIndex(r => r.id === id)
    newRecipe[index] = recipe
    setRecipes(newRecipe)
  }

  //Context
  const recipeContextValue = {
    handleRecipeAdd,
    handleRecipeDelete,
    handleRecipeSelect,
    handleRecipeChange
  }

  //ADD RECIPE
  function handleRecipeAdd() {
    const newRecipe = {
      id: uuidv4(),
      name: 'New',
      servings: 1,
      instructions: "instruc",
      ingredients: [
        { id: uuidv4(), name: 'Name', amount: '1 Tbpsp' }
      ]

    }

    setRecipes([...recipes, newRecipe])
  }
  // DELETE RECIPE
  function handleRecipeDelete(id) {
    setRecipes(recipes.filter(recipe => recipe.id !== id))
  }


  return (
    <RecipeContext.Provider value={recipeContextValue}>
      < RecipeList recipeArr={recipes} />
      {selectedRecipe && <RecipeEdit recipe={selectedRecipe} />}
      {/* selectedRecipe ? <RecipeEdit /> : null  */}
    </RecipeContext.Provider>

  )
}


const recipeArray = [
  {
    id: 1,
    name: "Plain Paneer",
    servings: 2,
    cookTime: '1:45',
    instructions: "1. Add salt swaad anusar \n2. Mix well \n3. Eat",
    ingredients: [
      {
        id: 1,
        name: 'Paneer',
        amount: '2 pounds'
      },
      {
        id: 2,
        name: 'Salt',
        amount: '1 tbsp'
      }
    ]
  },
  {
    id: 2,
    name: "Plain Salad",
    servings: 1,
    cookTime: '0:35',
    instructions: "1. Add salt swaad anusar\n2. Mix well\n3. Eat",
    ingredients: [
      {
        id: 1,
        name: 'Veges',
        amount: '2 Pounds'
      },
      {
        id: 2,
        name: 'Paprika',
        amount: '2 Tbsp'
      }
    ]
  }
]

export default App;


/*-------- Notes

recipeArray[obj1{attributes} , ob2{attributes},...]

recipeVar = recipeArray[1,2,...]

recipeVar is then sent as a prop to RecipeList

 {selectedRecipe && <RecipeEdit recipe={selectedsRecipe} />}
 this basically says is the first argument(before &&) is true then execute the following after &&
 if its not , dont

*/