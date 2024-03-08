import GameList from '../../components/GameList/GameList'
import styles from './ActionIndex.module.scss'


export default function ActionIndex({ user, setUser, games, setGames, genre, setGenre }){

    return(
        <div className={styles.actionIndex}>
            <h1 className={styles.title}>Action</h1>
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