import { Component } from "react"
import { signUp } from '../../utilities/users-service'
import styles from '../FormContainer/FormContainer.module.scss'

export default class SignUpForm extends Component {
state = {
  name: '',
  email: '',
  password: '',
  confirm: '',
  error: ''
}

handleChange = (evt) => {
  this.setState({
    [evt.target.name]: evt.target.value,
    error: ''
  })
}

handleSubmit = async (evt) => {
  evt.preventDefault()
  try {
    const formData = {...this.state}
    delete formData.confirm
    delete formData.error
    const user = await signUp(formData)
    this.props.setUser(user)
  } catch {
    this.setState({ error: 'Sign Up Failed - Try Again' })
  }
}

  render() {
    const disable = this.state.password !== this.state.confirm
    return (
      <div>
        <div className={styles.formContainer}>
          <form className={styles.form} autoComplete="off" onSubmit={this.handleSubmit}>
            <label className={styles.label}>Name</label>
            <input className={styles.input} type="text" name="name" value={this.state.name} onChange={this.handleChange} required />
            <label className={styles.label}>Email</label>
            <input className={styles.input} type="email" name="email" value={this.state.email} onChange={this.handleChange} required />
            <label className={styles.label}>Password</label>
            <input className={styles.input} type="password" name="password" value={this.state.password} onChange={this.handleChange} required />
            <label className={styles.label}>Confirm</label>
            <input className={styles.input} type="password" name="confirm" value={this.state.confirm} onChange={this.handleChange} required />
            <button className={styles.button} type="submit" disabled={disable}>SIGN UP</button>
          </form>
        </div>
        <p className="error-message">&nbsp;{this.state.error}</p>
      </div>
    )
  }
}