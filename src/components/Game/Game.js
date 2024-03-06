import GameDescription from '../GameDescription/GameDescription'
import styles from './Game.module.scss'


export default function Game({ user, setUser, game }) {

    return(
        <div className={styles.game}>
            <img src={game.image} className={styles.image}></img>
            <h1>{game.name}</h1>
            <p>{`$${game.price}`}</p>
            <GameDescription user={user} setUser={setUser} game={game}/>
        </div>
    )
}