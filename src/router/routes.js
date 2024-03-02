import HomePage from '../pages/HomePage/HomePage';
import ShowPage from '../pages/ShowPage/ShowPage';
import GenreIndexPage from '../pages/GenreIndexPage/GenreIndexPage';
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
	}
];

export default routes;
