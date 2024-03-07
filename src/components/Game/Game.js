import GameDescription from '../GameDescription/GameDescription'
import * as ordersAPI from '../../utilities/orders-api'
import styles from './Game.module.scss'


export default function Game({ user, setUser, cart, setCart, game }) {

    async function handleAddToOrder() {
        const updatedCart = await ordersAPI.addGameToCart(game._id);
        setCart(updatedCart);
        console.log(updatedCart)
    }

    return(
        <div className={styles.game}>
            <img src={game.image} className={styles.image}></img>
            <h1 className={styles.name}>{game.name}</h1>
            <p className={styles.price}>{`$${game.price}`}</p>
            <button className={styles.button} onClick={handleAddToOrder}>Add to Cart</button>
            <GameDescription user={user} setUser={setUser} game={game}/>
        </div>
    )
}