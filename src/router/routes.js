import HomePage from '../pages/HomePage/HomePage'
import IndexPage from '../pages/IndexPage/IndexPage'
import ShowPage from '../pages/ShowPage/ShowPage'
import CartPage from '../pages/CartPage/CartPage'
import NewOrderPage from '../pages/NewOrderPage/NewOrderPage';
import OrderHistoryPage from '../pages/OrderHistoryPage/OrderHistoryPage';


const routes = [
	{
		Component: NewOrderPage,
		key: 'NewOrder',
		path: '/orders/new'
	},
	{
		Component: OrderHistoryPage,
		key: 'OrderHistory',
		path: '/orders'
	},
	{
		Component: HomePage,
		key: 'Home',
		path: '/home'
	},
	{
		Component: IndexPage,
		key: 'Index',
		path: '/index/:id'
	},
	{
		Component: ShowPage,
		key: 'Show',
		path: '/games/:id'
	},
	{
		Component: CartPage,
		key: 'Cart',
		path: '/cart'
	}
];

export default routes;
