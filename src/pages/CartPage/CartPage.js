import styles from './CartPage.module.scss'

export default function CartPage({ user, setUser, cart, setCart }) {
    return(
        <div className={styles.CartPage}>
            <h1 className={styles.title}>CART PAGE</h1>
        </div>

    )
}