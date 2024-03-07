import GenreList from '../../components/GenreList/GenreList'
import styles from './HomePage.module.scss'

export default function HomePage({ user, setUser }) {
    return(

        <div className={styles.HomePage}>
            <h1 className={styles.heading}>Paul's Indie Gaming Emporium!</h1>
            <div className={styles.list}>
            <GenreList
            user={user}
            setUser={setUser}/>
            </div>
        </div>

    )
}