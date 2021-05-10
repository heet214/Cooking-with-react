import React from 'react'
import Ingredients from './Ingredients'

export default function IngredientsList({ ingredients }) {
    const ingredientElements = ingredients.map(ingredients => {
        return <Ingredients
            key={ingredients.id}
            {...ingredients}
        />
    })
    return (
        <div className="ingredient__grid">
            {ingredientElements}
        </div>
    )
}
