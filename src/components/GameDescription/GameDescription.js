import { useState, useEffect, useRef } from 'react'
import * as gameDescriptionsAPI from '../../utilities/game-descriptions-api'
import DescriptionFeature from '../DescriptionFeature/DescriptionFeature'
import styles from './GameDescription.module.scss'

export default function GameDescription({ user, setUser, game }) {

    const [description, setDescription] = useState({
        opening: '',
        synopsis: '',
        features: '',
        closing: ''
    })

    const [descriptionFeatures, setDescriptionFeatures] = useState([])
    const isMounted = useRef(false)

    const gameDescription = game.description

    const featureItems = descriptionFeatures.map(item => 
        <DescriptionFeature
            key={item}
            item={item}
            user={user}
            setUser={setUser}
            description={description}    
            descriptionFeatures={descriptionFeatures}
        />
    )

    useEffect(function(){
        async function getDescription(){
            try{
                const currentDes = await gameDescriptionsAPI.getById(gameDescription)
                setDescription(currentDes)
                setDescriptionFeatures(currentDes.features)
            } catch (error) {
                console.error(error)
            }
        }
        if(isMounted.current && gameDescription){
            getDescription()
        } else(isMounted.current = true)
    },[gameDescription])

    return(
        <div className={styles.gameDescription}>
            <h3>{description.opening}</h3>
            <p>{description.synopsis}</p>
            <ul className={styles.featureList}>{featureItems}</ul>
            <h3>{description.closing}</h3>
        </div>
    )
    
}