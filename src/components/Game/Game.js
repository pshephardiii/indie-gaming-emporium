import GameDescription from '../GameDescription/GameDescription'



export default function Game({ user, setUser, game }) {

    return(
        <div>
            <h1>{game.name}</h1>
            <GameDescription user={user} setUser={setUser} game={game}/>
        </div>
    )
}