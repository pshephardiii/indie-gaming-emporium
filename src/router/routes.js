import HomePage from '../pages/HomePage/HomePage'
import ActionIndexPage from '../pages/ActionIndexPage/ActionIndexPage'
import AdventureIndexPage from '../pages/AdventureIndexPage/AdventureIndexPage'
import CasualIndexPage from '../pages/CasualIndexPage/CasualIndexPage'
import HorrorIndexPage from '../pages/HorrorIndexPage/HorrorIndexPage'
import RPGIndexPage from '../pages/RPGIndexPage/RPGIndexPage'
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
		Component: ActionIndexPage,
		key: 'ActionIndex',
		path: '/index/action'
	},
	{
		Component: AdventureIndexPage,
		key: 'AdventureIndex',
		path: '/index/adventure'
	},
	{
		Component: CasualIndexPage,
		key: 'CasualIndex',
		path: '/index/casual'
	},
	{
		Component: HorrorIndexPage,
		key: 'HorrorIndex',
		path: '/index/horror'
	},
	{
		Component: RPGIndexPage,
		key: 'RPGIndex',
		path: '/index/rpg'
	}

];

export default routes;
