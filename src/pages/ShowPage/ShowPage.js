import Game from '../../components/Game/Game'
import * as gamesAPI from '../../utilities/games-api'
import styles from './ShowPage.module.scss'
import { useParams } from 'react-router-dom'
import {useState, useEffect } from 'react'

export default function ShowPage({ user, setUser, cart, setCart }) {

const [game, setGame] = useState({
    name: '',
    image: '',
    description: '',
    genre: '',
    price: 0
})

const {id} = useParams()

useEffect(function() {

    async function getGame() {
        try{
            const currentGame = await gamesAPI.getById(id)
            setGame(currentGame)
        } catch (error) {
            console.error(error)
        }
    }
    getGame()
}, [])

    return(
        <div className={styles.ShowPage}>
           <Game user={user} setUser={setUser} cart={cart} setCart={setCart} game={game}/>
        </div>
    )
}