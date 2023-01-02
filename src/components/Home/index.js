import Header from '../Header'
import Sidebar from '../Sidebar'
import Table from '../Table'
import './index.css'

const Home = () => (
  <div className="hello-container">
    <img
      src="https://res.cloudinary.com/dsiyffj0o/image/upload/v1672462243/image2_vw3qkf.png"
      alt="logo"
      className="logo"
    />
    <Header />
    <hr className="hr-line" />
    <div className="con">
      <Sidebar />
      <Table />
    </div>
  </div>
)

export default Home
