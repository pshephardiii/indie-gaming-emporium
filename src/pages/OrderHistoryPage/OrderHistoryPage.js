import { useState, useEffect } from 'react'
import * as ordersAPI from '../../utilities/orders-api'
import OrderList from '../../components/OrderList/OrderList'
import OrderDetail from '../../components/OrderDetail/OrderDetail'
import styles from './OrderHistoryPage.module.scss'

export default function OrderHistoryPage({ user, setUser }) {

  const [orders, setOrders] = useState([]);
  const [activeOrder, setActiveOrder] = useState(null);

  useEffect(function () {
    async function fetchOrderHistory() {
      const orders = await ordersAPI.getOrderHistory()
      setOrders(orders)
      setActiveOrder(orders[0] || null)
    }
    fetchOrderHistory()
  }, [])

  function handleSelectOrder(order) {
    setActiveOrder(order)
  }

  return (
    <main className={styles.OrderHistoryPage}>
      <OrderList
        orders={orders}
        activeOrder={activeOrder}
        handleSelectOrder={handleSelectOrder}
      />
      <OrderDetail
        order={activeOrder}
      />
    </main>
  )
}