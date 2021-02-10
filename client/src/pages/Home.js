import { useState, useCallback } from 'react';
import axios from 'axios';
import RecipeDetails from '../components/RecipeDetails';
import RecipeResultListItem from '../components/RecipeResultListItem';
import SearchForm from '../components/SearchForm';

const Home = () => {
    const [ingredients, setIngredients] = useState('')
    const [diet, setDiet] = useState(null)
    const [health, setHealth] = useState(null)
    const [detailsVisible, setDetailsVisible] = useState(false)
    const [activeRecipe, setActiveRecipe] = useState(null)
    const [recipeList, setRecipeList] = useState()
    
    const handleIngredientsChange = e => setIngredients(e.target.value)
    const handleDietChange = e => setDiet(e.target.value)
    const handleHealthChange = e => setHealth(e.target.value)

    const getRecipes = useCallback(data => {
        setRecipeList(data)
    }, [setRecipeList])

    const onClickDetails = useCallback(e => {
        setActiveRecipe(recipeList[e.target.dataset.idx].recipe)
        setDetailsVisible(true)
    }, [recipeList, setDetailsVisible, setActiveRecipe])

    const handleSubmit = e => {
        e.preventDefault();
    
        axios.post('/api/world', { ingredients, diet, health })
            .then(({ data: { hits } }) => {
                console.log('tits', hits)
                getRecipes(hits)
             })
            .catch(error => console.log(error));
    }

    return (
        <div>
            <h1>Home</h1>

            <SearchForm
                handleDietChange={handleDietChange}
                handleHealthChange={handleHealthChange}
                handleSubmit={handleSubmit}
                handleIngredientsChange={handleIngredientsChange}
                ingredients={ingredients}
            />

            <h3>Recipes: </h3>
            <ul>
                {recipeList && recipeList.map((hit, idx) => 
                    <RecipeResultListItem 
                        key={hit.recipe.uri}
                        idx={idx}
					    label={hit.recipe.label} 
			            onClickDetails={onClickDetails}
				    />)
                }
            </ul>

            {activeRecipe && detailsVisible && <RecipeDetails recipe={activeRecipe} />}
        </div>
    )
}

export default Home;