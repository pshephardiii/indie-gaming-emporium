import styles from './ActionIndex.module.scss'
import GameList from '../../components/GameList/GameList'


export default function ActionIndex({ user, setUser, games, setGames, genre, setGenre }){

    return(
        <div className={styles.actionIndex}>
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