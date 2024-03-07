import { Link } from 'react-router-dom';
import styles from './NavBar.module.scss'
import UserLogOut from '../UserLogOut/UserLogOut'

const NavBar = ({ user, setUser }) => {
	return (
		<div className={styles.NavBar}>
		<img src='https://i.imgur.com/uqyjlgC.png' className={styles.icon} title='Order History'/>
		<img src='https://i.imgur.com/Onph2hh.png' className={styles.icon} title='Cart'/>
		<Link to="/"><img src='https://i.imgur.com/ZBs7rFQ.png' className={styles.icon} title='Home'/></Link>
		<UserLogOut user={user} setUser={setUser}/>
		</div>
	);
};

export default NavBar;