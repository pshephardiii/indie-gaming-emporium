import { useState, useEffect, useRef } from 'react'
import { useParams } from 'react-router-dom'
import * as gamesAPI from '../../utilities/games-api'
import * as genresApi from '../../utilities/genres-api'
import ActionIndex from '../../components/ActionIndex/ActionIndex'
import AdventureIndex from '../../components/AdventureIndex/AdventureIndex'
import CasualIndex from '../../components/CasualIndex/CasualIndex'
import HorrorIndex from '../../components/HorrorIndex/HorrorIndex'
import RPGIndex from '../../components/RPGIndex/RPGIndex'
import styles from './IndexPage.module.scss'


export default function IndexPage({ user, setUser }){

    const [games, setGames] = useState([])
    const [genre, setGenre] = useState({
        name: ''
    })
    const {id} = useParams() 
    const isMounted = useRef(false)

    useEffect(function(){
        async function getGenre(){
            try{
                const currentGen = await genresApi.getById(id)
                setGenre(currentGen)
            } catch (error) {
                console.error(error)
            }
        }
        getGenre()
    },[])

    useEffect(function(){
        async function getGames(){
            try {
                const selectedGames = await gamesAPI.getByGenre(genre._id)
                setGames(selectedGames)
            } catch (error) {
                console.error(error)
            }
        }
        if(isMounted.current && genre._id) {
            getGames()
        } else {isMounted.current = true}
    }, [genre])
    
    return(
        <div className={styles.IndexPage}>
            {genre.name === 'action' && games.length > 0 && games[0].genre.name === 'action' ? <ActionIndex user={user} setUser={setUser} games={games} setGames={setGames} genre={genre} setGenre={setGenre}/> : 
            genre.name === 'adventure' && games.length > 0 && games[0].genre.name === 'adventure' ? <AdventureIndex user={user} setUser={setUser} games={games} setGames={setGames} genre={genre} setGenre={setGenre}/> : 
            genre.name === 'casual' && games.length > 0 && games[0].genre.name === 'casual' ? <CasualIndex user={user} setUser={setUser} games={games} setGames={setGames} genre={genre} setGenre={setGenre}/> :
            genre.name === 'horror' && games.length > 0 && games[0].genre.name === 'horror' ? <HorrorIndex user={user} setUser={setUser} games={games} setGames={setGames} genre={genre} setGenre={setGenre}/> :
            genre.name === 'rpg' && games.length > 0 && games[0].genre.name == "rpg" ? <RPGIndex user={user} setUser={setUser} games={games} setGames={setGames} genre={genre} setGenre={setGenre}/> : <></>}
        </div>
    )
}