import React, { useContext } from 'react'
import Recipe from './Recipe'
import { RecipeContext } from './App'

export default function RecipeList({ recipeArr }) {

    const { handleRecipeAdd } = useContext(RecipeContext)
    return (
        <div className="recipe-list">
            <div>

                {recipeArr.map(recipe => {
                    return <Recipe key={recipe.id} {...recipe} />
                })}

            </div>
            <div className="recipe-list__add-recipe-btn-container">
                <button
                    className="btn btn--primary"
                    onClick={handleRecipeAdd}
                >
                    Add Recipe
                </button>
            </div>

        </div>
    )
}

/*--------- Notes

    we are writting {...recipeVar} that every attribute in recipeVar is binded into one

    {...objName} is a spread operator

    The map() method calls the provided function once for each element in an array, in order.
    and that provided function is used to store the object and its attributes temporarily
    and is used to access the obj and its attri

    Example:

    var array = [
{
    id:1
},
{
    id:2
}
]

array.map(func => {

        alert(func.id);

})


    */