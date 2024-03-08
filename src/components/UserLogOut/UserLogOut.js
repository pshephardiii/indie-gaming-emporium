import { useNavigate } from 'react-router-dom'
import { logOut } from '../../utilities/users-service'
import styles from './UserLogOut.module.scss'

export default function UserLogOut({ user, setUser }) {

  const navigateTo = useNavigate()

  function handleLogOut() {
    logOut()
    setUser(null)
    navigateTo('/')
  }

  return (
    <div>
      <img src='https://i.imgur.com/7BJkJgc.png' className={styles.UserLogOut} title='Log Out' onClick={handleLogOut}/>
    </div>
  )
}