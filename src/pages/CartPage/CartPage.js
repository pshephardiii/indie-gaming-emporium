import { useNavigate } from 'react-router-dom'
import * as ordersAPI from '../../utilities/orders-api'
import OrderDetail from '../../components/OrderDetail/OrderDetail'
import styles from './CartPage.module.scss'

export default function CartPage({ user, setUser, cart, setCart }) {

    const navigateTo = useNavigate()

    async function handleChangeQty(gameId, newQty) {
        const updatedCart = await ordersAPI.setGameQtyInCart(gameId, newQty);
        setCart(updatedCart);
    }

    async function handleCheckout() {
        await ordersAPI.checkout()
        cart.lineGames = []
        navigateTo('/orders')
    }

    return(
        <div className={styles.CartPage}>
            <OrderDetail
                user={user}
                order={cart}
                handleChangeQty={handleChangeQty}
                handleCheckout={handleCheckout}
            />
        </div>
    )
}