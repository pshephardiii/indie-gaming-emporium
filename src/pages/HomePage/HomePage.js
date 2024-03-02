import styles from './HomePage.module.scss'
import GenreList from '../../components/GenreList/GenreList'
import * as userServiceApi from '../../utilities/users-service'

export default function HomePage(props) {
    return(
        <div>
    <h1>This is the home page!</h1>
    <GenreList
        user={props.user}/>
    <button onClick={(userServiceApi.logOut())}>log out</button>
    </div>
    )
}

// const [showHome, setShowHome] = useState(false)

// useEffect(() => {
//     if (localStorage.token && !props.token) {
//         props.setToken(localStorage.getItem('token'))
//         setShowHome(true)
//     }
//     if(localStorage.token && localStorage.user && !props.user) {
//         props.setUser(JSON.parse(localStorage.getItem('user')))
//     }
// }, [])

// return (
//     <div className={styles.homePage}>
//         { showHome ? <GenreList token={props.token} setToken={props.token} user={props.user} setUser={props.user} genres={props.genres} /> : 
//         <h1>Log in to Browse</h1>}
//     </div>
// )
// }