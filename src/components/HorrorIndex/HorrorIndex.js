import styles from './HorrorIndex.module.scss'
import GameList from '../../components/GameList/GameList'


export default function HorrorIndex({ user, setUser, games, setGames, genre, setGenre }){

    return(
        <div className={styles.horrorIndex}>
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