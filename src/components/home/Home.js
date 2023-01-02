import React from 'react'
import './home.css'
import { FontAwesomeIcon,} from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

const Home = () => {
  return (
    <>
    {/* header section start */}
      <div className="header">
        <div className="logo">
        <span>Kirtasiye <FontAwesomeIcon icon={faCartShopping} /></span>
        </div>
        <div className="navbar">
          <ul>
            <li>Sparis ver</li>
            <li>Blog</li>
            <li>Yorumlar</li>
            <li>Iletisim</li>
          </ul>
        </div>
        <div className="login">
          <button>login</button>
        </div>
      </div>
    {/* header section end */}



    {/* main section start */}

    <div className="home">
      Home
    </div>

    {/* main section end */}
    </>
  )
}

export default Home