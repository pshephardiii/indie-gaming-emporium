import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import routes from './routes';
import { useState, useEffect, useRef } from 'react'
import styles from './AppRouter.module.scss';
import { getUser } from '../utilities/users-service';
import AuthPage from '../pages/AuthPage/AuthPage';
import NavBar from '../components/NavBar/NavBar'
import * as ordersAPI from '../utilities/orders-api'


const AppRouter = () => {
	const [user, setUser] = useState(getUser())
	const [cart, setCart] = useState(null)
	const isMounted = useRef(false)

	useEffect(function() {
		async function getCart() {
			const cart = await ordersAPI.getCart();
			setCart(cart);
		  }
		  {isMounted.current && user ? getCart() : isMounted.current = true};
	}, [])

	return (

		<Router>
			<main className={styles.App}>
			{
				user ?
			<>
			<NavBar user={user} setUser={setUser}></NavBar>
			<Routes className={styles.Routes}>
				{routes.map(({ Component, key, path }) => (
					<Route
						key={key}
						path={path}
						element={
						<Component 
							page={key} 
							user={user}
							setUser={setUser}
							cart={cart}
						/>
						}
					></Route>
				))}
				<Route path='/*' element={<Navigate to="/home"/>}/>
			</Routes>
			</>
			:
		<AuthPage setUser={setUser}/>
		}
		</main>
		</Router>
	);
};

export default AppRouter;
