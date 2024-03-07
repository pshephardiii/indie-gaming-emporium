import { Link } from 'react-router-dom';
import styles from './NavBar.module.scss'
import UserLogOut from '../UserLogOut/UserLogOut'

const NavBar = ({ user, setUser }) => {
	return (
		<div className={styles.NavBar}>
		<Link to="/orders"><img src='https://i.imgur.com/uqyjlgC.png' className={styles.icon} title='Order History'/></Link>
		<Link to="/cart"><img src='https://i.imgur.com/Onph2hh.png' className={styles.icon} title='Cart'/></Link>
		<Link to="/"><img src='https://i.imgur.com/ZBs7rFQ.png' className={styles.icon} title='Home'/></Link>
		<UserLogOut user={user} setUser={setUser}/>
		</div>
	);
};

export default NavBar;
