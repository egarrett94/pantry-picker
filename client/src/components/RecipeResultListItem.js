const RecipeResultListItem = ({ label, onClickDetails, idx }) => <li>{label} - <span data-idx={idx} onClick={onClickDetails}>see details</span></li>

export default RecipeResultListItem