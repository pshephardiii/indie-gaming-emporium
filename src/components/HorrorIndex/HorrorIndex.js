import styles from './HorrorIndex.module.scss'
import GameList from '../../components/GameList/GameList'


export default function HorrorIndex({ user, setUser, games, setGames, genre, setGenre }){

    return(
        <div className={styles.horrorIndex}>
            <h1 className={styles.title}>Horror</h1>
            <GameList 
            user={user} 
            setUser={setUser} 
            games={games} 
            setGames={setGames}
            genre={genre}
            setGenre={setGenre}/>
        </div>
    )
}