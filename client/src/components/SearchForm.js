/** @jsxImportSource @emotion/react */

const SearchForm = ({handleSubmit, ingredients, handleIngredientsChange, handleDietChange, handleHealthChange }) => {

    const formCss = {
        display: 'flex',
        flexDirection: 'column',
        margin: "0 auto",
        backgroundColor: 'hotpink',
        padding: '15px',
        width: '30vw',
        '> div': {
            marginBottom: '10px'
        },
        '> input[type="text"], select': {
            width: '100%!important'
        },
    }

    return (
        <form css={formCss} onSubmit={handleSubmit}>
            <h2>Enter an ingredient to find a recipe: </h2><br/>
            <div>
                <label htmlFor="ingredients">Enter ingredients separated by commas</label><br/>
                <input
                    type="text"
                    name="ingredients"
                    value={ingredients}
                    onChange={handleIngredientsChange}
                />
            </div>

            <div>
                <label htmlFor="health">Select a health category</label><br/>
                <select defaultValue="null" name="health" onChange={handleHealthChange}>
                    <option value="null" disabled>Health Options</option>
                    <option value="alcohol-free">Alcohol-Free</option>
                    <option value="peanut-free">Peanut-Free</option>
                    <option value="sugar-conscious">Sugar-Conscious</option>
                    <option value="tree-nut-free">Tree Nut-Free</option>
                    <option value="vegan">Vegan</option>
                    <option value="vegatarian">Vegetarian</option>
                </select>
            </div>

            <div>
                <label htmlFor="diet">Select a diet category</label><br/>
                <select defaultValue="null" name="diet" onChange={handleDietChange}>
                    <option value="null" disabled>Diet Options</option>
                    <option value="balanced">Balanced</option>
                    <option value="high-protein">High Protein</option>
                    <option value="low-fat">Low Fat</option>
                    <option value="low-carb">Low Carb</option>
                </select>
            </div>

            <button type="submit">Submit</button>
        </form>
    )
} 

export default SearchForm;