import GameDescription from '../GameDescription/GameDescription'
import * as ordersAPI from '../../utilities/orders-api'
import { useRef } from 'react'
import styles from './Game.module.scss'


export default function Game({ user, setUser, cart, setCart, game }) {

    const addedToCart = useRef(false)
    const addBtn = document.getElementById('add-btn')

    async function handleAddToOrder() {
        const updatedCart = await ordersAPI.addGameToCart(game._id);
        setCart(updatedCart);
        addedToCart.current = (!addedToCart.current)

        if (addedToCart) {
            addBtn.innerText = 'Added to Cart!'
            addBtn.disabled = true
            addBtn.style.backgroundColor = 'gray'
            addBtn.style.boxShadow = 'none'
        } else {
            addBtn.innerText = 'Add to Cart'
            addBtn.disabled = false
            addBtn.styles.backgroundColor = 'red'
        }
    }

    return(
        <div className={styles.game}>
            <img src={game.image} className={styles.image}></img>
            <h1 className={styles.name}>{game.name}</h1>
            <p className={styles.price}>{`$${game.price}`}</p>
            <button id="add-btn" className={styles.button} onClick={handleAddToOrder}>Add to Cart</button>
            <GameDescription user={user} setUser={setUser} game={game}/>
        </div>
    )
}