const RecipeDetails = ({ recipe }) => {
    const { label, image, url } = recipe;
    
    return (
        <div>
            <h1>{label}</h1>

            <img src={image} alt={label} />
            <a href={url}>Visit Original Site</a>
        </div>
    )
}

export default RecipeDetails;