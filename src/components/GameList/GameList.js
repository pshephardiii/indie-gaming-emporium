import GameListItem from '../GameListItem/GameListItem'
import styles from './GameList.module.scss'

export default function GameList({ user, setUser, games, genre, setGenre }) {

    const gameList = games.map(game =>
        <li key={game._id}><GameListItem
            user={user}
            setUser={setUser}
            games={games}
            game={game}
        ></GameListItem></li>)

    return(
        <ul className={styles.gameList}>
            {gameList}
        </ul>
    )
}