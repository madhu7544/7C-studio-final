import {Component} from 'react'

import './index.css'

class AddUserPopUp extends Component {
  state = {
    id: 1,
    email: '',
    role: '',
  }

  addUser = () => {
    const {id, email, role} = this.state
    let arr = JSON.parse(localStorage.getItem('Users')) || []
    const obj = {id: arr.length, email, role}
    arr = [...arr, obj]
    localStorage.setItem('Users', JSON.stringify(arr))
    this.setState({id: arr.length})
    console.log(id)
  }

  onChangeEmail = event => {
    this.setState({email: event.target.value})
  }

  onChangeRole = event => {
    this.setState({role: event.target.value})
  }

  render() {
    return (
      <div className="popup-container">
        <div className="img-content">
          <img
            src="https://res.cloudinary.com/dsiyffj0o/image/upload/v1672484411/add-user_wcvypq.png"
            alt="useradd"
            className="user-add"
          />
          <p className="desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <div className="add-content-container">
          <h3 className="user-head">User Information</h3>
          <form className="form-container" onSubmit={this.addUser}>
            <label className="label" htmlFor="email">
              Email Id of User
            </label>
            <input
              type="text"
              id="email"
              className="input"
              onChange={this.onChangeEmail}
            />
            <label className="label" htmlFor="role">
              Role
            </label>
            <select className="input" onChange={this.onChangeRole} id="role">
              <option value="Admin">Admin</option>
              <option value="Owner">Owner</option>
              <option value="Sales">Sales</option>
              <option value="Management">Management</option>
            </select>
            <div className="button-container">
              <button type="button" className="cancel">
                Cancel
              </button>
              <button type="submit" className="add">
                Add
              </button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}
export default AddUserPopUp
