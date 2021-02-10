const SearchForm = ({handleSubmit, ingredients, handleIngredientsChange, handleDietChange, handleHealthChange }) => {

    return (
        <form onSubmit={handleSubmit}>
            <h2>Enter an ingredient to find a recipe: </h2>
            <input
                type="text"
                value={ingredients}
                onChange={handleIngredientsChange}
            />

            <select onChange={handleHealthChange}>
                <option value="null" selected disabled>Health Options</option>
                <option value="alcohol-free">Alcohol-Free</option>
                <option value="peanut-free">Peanut-Free</option>
                <option value="sugar-conscious">Sugar-Conscious</option>
                <option value="tree-nut-free">Tree Nut-Free</option>
                <option value="vegan">Vegan</option>
                <option value="vegatarian">Vegetarian</option>
            </select>

            <select onChange={handleDietChange}>
                <option value="null" selected disabled>Diet Options</option>
                <option value="balanced">Balanced</option>
                <option value="high-protein">High Protein</option>
                <option value="low-fat">Low Fat</option>
                <option value="low-carb">Low Carb</option>
            </select>

            <button type="submit">Submit</button>
        </form>
    )
} 

export default SearchForm;