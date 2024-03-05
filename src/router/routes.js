import HomePage from '../pages/HomePage/HomePage'
import IndexPage from '../pages/IndexPage/IndexPage'
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
		key: 'IndexPage',
		path: '/index/:id'
	}
];

export default routes;
