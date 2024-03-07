import styles from './RPGIndex.module.scss'
import GameList from '../../components/GameList/GameList'


export default function RPGIndex({ user, setUser, games, setGames, genre, setGenre }){

    return(
        <div className={styles.RPGIndex}>
            <h1 className={styles.title}>ROLE-PLAYING</h1>
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