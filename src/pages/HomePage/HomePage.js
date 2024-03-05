import GenreList from '../../components/GenreList/GenreList'

export default function HomePage({ user, setUser }) {
    return(
        <GenreList
        user={user}
        setUser={setUser}/>
    )
}