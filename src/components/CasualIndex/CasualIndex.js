import styles from './CasualIndex.module.scss'
import GameList from '../../components/GameList/GameList'


export default function CasualIndex({ user, setUser, games, setGames, genre, setGenre }){

    return(
        <div className={styles.casualIndex}>
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