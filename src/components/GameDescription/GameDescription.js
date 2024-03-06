import { useState, useEffect, useRef } from 'react'
import * as gameDescriptionsAPI from '../../utilities/game-descriptions-api'


export default function GameDescription({ user, setUser, game }) {

    const [description, setDescription] = useState({
        opening: '',
        synopsis: '',
        features: '',
        closing: ''
    })
    const isMounted = useRef(false)

    const gameDescription = game.description

    useEffect(function(){
        async function getDescription(){
            try{
                const currentDes = await gameDescriptionsAPI.getById(gameDescription)
                setDescription(currentDes)
            } catch (error) {
                console.error(error)
            }
        }
        if(isMounted.current && gameDescription){
            getDescription()
        } else(isMounted.current = true)
    },[gameDescription])

 

    return(
        <h4>{description.opening}</h4>
    )
    
}