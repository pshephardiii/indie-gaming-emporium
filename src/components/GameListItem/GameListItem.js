import { Link } from 'react-router-dom'
import styles from './GameListItem.module.scss'

export default function GameListItem({ user, setUser, games, game }) {
    return(
        <div className={styles.gameListItem}>
            <Link to={`/games/${game._id}`} className={styles.link}><img src={game.image} className={styles.image}></img></Link>
            <Link to={`/games/${game._id}`} className={styles.link}><h2>{game.name}</h2></Link>
            <p className={styles.price}>{`$${game.price}`}</p>
        </div>
    )
}