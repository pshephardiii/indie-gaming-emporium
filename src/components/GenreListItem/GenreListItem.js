import { Link } from 'react-router-dom'

export default function GenreListItem({ user, setUser, genres, setGenres, gen }){
    return(
        <Link to={`/index/${gen._id}`}>{gen.name}</Link>
    )
}