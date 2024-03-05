import { Link } from 'react-router-dom'

export default function GameListItem({ user, setUser, games, game }) {
    return(
        <h1><Link to={`/games/${game._id}`}>{game.name}</Link></h1>
    )
}