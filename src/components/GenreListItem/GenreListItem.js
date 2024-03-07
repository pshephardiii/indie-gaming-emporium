import { Link } from 'react-router-dom'
import styles from './GenreListItem.module.scss'

export default function GenreListItem({ user, setUser, genres, setGenres, gen }){
    return(
        <Link to={`/index/${gen._id}`}><img src={gen.image} className={styles.GenreListItem}/></Link>
    )
}