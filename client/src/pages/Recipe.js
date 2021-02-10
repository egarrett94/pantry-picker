import { useParams } from 'react-router-dom'

const Recipe = () => {

    const { name } = useParams();

    return (<h1>recipe page for {name}</h1>)
}

export default Recipe;