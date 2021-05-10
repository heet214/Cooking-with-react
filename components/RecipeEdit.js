import React, { useContext } from 'react';
import RecipeIngredientEdit from './RecipeIngredientEdit';
import { RecipeContext } from './App';

export default function RecipeEdit({ recipe }) {

    const { handleRecipeChange } = useContext(RecipeContext);

    function handleIngredientChange(id, ingredient) {

    }

    function handleChange(changes) {
        handleRecipeChange({ ...recipe, ...changes }, recipe.id)
    }

    return (
        <div className="recipe-edit">
            <div className="recipe-edit__remove-btn-container">
                <button className="btn recipe-edit__remove-btn">&times;</button>
            </div>
            <div>
                <div className="recipe-edit__details-grid">
                    <label
                        className="recipe-edit__label"
                        htmlFor="name">
                        Name
                    </label>
                    <input
                        className="recipe-edit__input"
                        type="text"
                        name="name"
                        id="name"
                        onInput={e => handleChange({ name: e.target.value })}
                        value={recipe.name} />

                    <label
                        className="recipe-edit__label"
                        htmlFor="cookTime">
                        Cook Time
                    </label>
                    <input
                        className="recipe-edit__input"
                        type="text"
                        name="cookTime"
                        id="cookTime"
                        onInput={e => handleChange({ cookTime: e.target.value })}
                        value={recipe.cookTime} />

                    <label
                        className="recipe-edit__label"
                        htmlFor="servings">
                        Servings
                    </label>
                    <input
                        className="recipe-edit__input"
                        type="number"
                        min="1"
                        name="servings"
                        id="servings"
                        onInput={e => handleChange({ servings: parseInt(e.target.value) || '' })}
                        value={recipe.servings} />

                    <label
                        className="recipe-edit__label"
                        htmlFor="instructions">
                        Instructions
                    </label>
                    <textarea
                        className="recipe-edit__input"
                        type="text"
                        name="instructions"
                        id="instructions"
                        onInput={e => handleChange({ instructions: e.target.value })}
                        value={recipe.instructions} />

                </div>
                <br />
                <label className="recipe-edit__label">Ingredients</label>
                <div className="recipe-edit__ingredient-grid">
                    <div>Name</div>
                    <div>Amount</div>
                    <div></div>
                    {recipe.ingredients.map(ingredient => (
                        <RecipeIngredientEdit
                            handleIngredientChange={handleIngredientChange}
                            key={ingredient.id}
                            ingredient={ingredient} />
                    ))}

                </div>
                <div className="recipe-edit__add-ingredient-btn-container">
                    <button className="btn btn--primary">Add Ingredient  </button>
                </div>
            </div>
        </div>
    )
}
