import styles from './AdventureIndex.module.scss'
import GameList from '../../components/GameList/GameList'


export default function AdventureIndex({ user, setUser, games, setGames, genre, setGenre }){

    return(
        <div className={styles.adventureIndex}>
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