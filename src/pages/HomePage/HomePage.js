import GenreList from '../../components/GenreList/GenreList'
import styles from './HomePage.module.scss'

export default function HomePage({ user, setUser }) {
    return(
        <div className={styles.HomePage}>
            <GenreList
            user={user}
            setUser={setUser}/>
        </div>
    )
}