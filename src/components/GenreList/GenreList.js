import { useState, useEffect } from 'react'
import * as genresAPI from '../../utilities/genres-api'
import GenreListItem from '../GenreListItem/GenreListItem'

export default function GenreList({ user, setUser }) {

    const [genres, setGenres] = useState([])

    useEffect(function(){
        async function getGenres(){
            const allGenres = await genresAPI.getAll()
            setGenres(allGenres)
        }
        getGenres()
    })

    const genreList = genres.map(gen =>
        <GenreListItem
            user={user}
            setUser={setUser}
            genres={genres}
            setGenres={setGenres}
            gen={gen}
            key={gen._id}
        >{gen.name}</GenreListItem>)

    return(
        <ul>
            {genreList}
        </ul>
    )
}