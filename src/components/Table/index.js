import {Component} from 'react'

import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'
import AddUserPopup from '../AddUserPopUp'

import NewRow from '../NewRow'

import './index.css'

class Table extends Component {
  state = {users: JSON.parse(localStorage.getItem('Users'))}

  onClickDelete = id => {
    const {users} = this.state
    const deleteIndex = users.findIndex(each => id === each.id)
    console.log(deleteIndex)
    users.splice(deleteIndex, 1)
    console.log(users)
    this.setState({users})
    localStorage.setItem('Users', JSON.stringify(users))
  }

  render() {
    const {users} = this.state
    console.log(users.length)
    return (
      <div className="settings_main">
        <Popup
          trigger={
            <button type="button" className="add-user-btn">
              AddUser
            </button>
          }
          position="bottom center"
          className="add-content"
        >
          <AddUserPopup />
        </Popup>
        {users.length > 0 ? (
          <table className="user-table">
            <thead className="heading-table">
              <td>#</td>
              <td>User</td>
              <td>Last Signed In</td>
              <td>Role</td>
              <td> </td>
            </thead>
            {users.map(e => (
              <NewRow key={e.uuid} all={e} onClickDelete={this.onClickDelete} />
            ))}
          </table>
        ) : (
          ''
        )}
      </div>
    )
  }
}

export default Table
