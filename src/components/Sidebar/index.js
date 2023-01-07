import {Component} from 'react'

import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'

import './index.css'
import AddUserPopup from '../AddUserPopUp'

class Sidebar extends Component {
  state = {
    onMouse: false,
    onMouse1: false,
    onMouse2: false,
    onMouse3: false,
    onMouse4: false,
  }

  onMouse = () => {
    this.setState({onMouse: true})
  }

  onLeave = () => {
    this.setState({onMouse: false})
  }

  onMouse1 = () => {
    this.setState({onMouse1: true})
  }

  onLeave1 = () => {
    this.setState({onMouse1: false})
  }

  onMouse2 = () => {
    this.setState({onMouse2: true})
  }

  onLeave2 = () => {
    this.setState({onMouse2: false})
  }

  onMouse3 = () => {
    this.setState({onMouse3: true})
  }

  onLeave3 = () => {
    this.setState({onMouse3: false})
  }

  onMouse4 = () => {
    this.setState({onMouse4: true})
  }

  onLeave4 = () => {
    this.setState({onMouse4: false})
  }

  onMouse5 = () => {
    this.setState({onMouse5: true})
  }

  onLeave5 = () => {
    this.setState({onMouse5: false})
  }

  render() {
    const {
      onMouse,
      onMouse1,
      onMouse2,
      onMouse3,
      onMouse4,
      onMouse5,
    } = this.state
    const yes = onMouse ? 'greenColor' : ''
    const yes1 = onMouse1 ? 'greenColor' : ''
    const yes2 = onMouse2 ? 'greenColor' : ''
    const yes3 = onMouse3 ? 'greenColor' : ''
    const yes4 = onMouse4 ? 'greenColor' : ''
    const yes5 = onMouse5 ? 'greenColor' : ''
    return (
      <div className="sidebar-container">
        <div className="side">
          <Popup
            trigger={
              <button
                onMouseEnter={this.onMouse}
                onMouseLeave={this.onLeave}
                className={`side-head ${yes}`}
                type="button"
              >
                Products
              </button>
            }
            position="right"
          >
            <h1>Products</h1>
          </Popup>
          <Popup
            trigger={
              <button
                onMouseEnter={this.onMouse1}
                onMouseLeave={this.onLeave1}
                className={`side-head ${yes1}`}
                type="button"
              >
                Demo Script
              </button>
            }
            position="right"
          >
            <h1>Demo Script</h1>
          </Popup>
          <Popup
            trigger={
              <button
                onMouseEnter={this.onMouse2}
                onMouseLeave={this.onLeave2}
                className={`side-head ${yes2}`}
                type="button"
              >
                Customers
              </button>
            }
            position="right center"
          >
            <h1>Customers</h1>
          </Popup>
          <Popup
            trigger={
              <button
                onMouseEnter={this.onMouse3}
                onMouseLeave={this.onLeave3}
                className={`side-head ${yes3}`}
                type="button"
              >
                Sales Team
              </button>
            }
            position="right"
          >
            <h1>Sales Team</h1>
          </Popup>
          <Popup
            trigger={
              <button
                onMouseEnter={this.onMouse4}
                onMouseLeave={this.onLeave4}
                className={`side-head ${yes4}`}
                type="button"
              >
                Demos
              </button>
            }
            position="right"
          >
            <h1>Demos</h1>
          </Popup>
          <Popup
            trigger={
              <button
                onMouseEnter={this.onMouse5}
                onMouseLeave={this.onLeave5}
                className={`side-head ${yes5}`}
                type="button"
              >
                Settings
              </button>
            }
            position="right center"
          >
            <AddUserPopup />
          </Popup>
        </div>
        <hr className="line" />
      </div>
    )
  }
}
export default Sidebar
