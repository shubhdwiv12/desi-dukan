import React from 'react'
import './homepage.style.scss'

const HomePage = () => (
  <div className="homepage">
    <div className="directory-menu">
        <div className="menu-item">
        <div className="content">
          <h2 className="title" >HATS</h2>
          <p className="subtitle">SHOP NOW</p>
        </div>
      </div>
      <div className="menu-item">
        <div className="content">
          <h2 className="title">JACKETS</h2>
          <p className="subtitle">SHOP NOW</p>
        </div>
      </div>
      <div className="menu-item">
        <div className="content">
          <h2 className="title">SNEAKERS</h2>
          <p className="subtitle">SHOP NOW</p>
        </div>
      </div>
      <div className="menu-item">
        <div className="content">
          <h2 className="title">MEN</h2>
          <p className="subtitle">SHOP NOW</p>
        </div>
      </div>
      <div className="menu-item">
        <div className="content">
          <h2 className="title">WOMEN</h2>
          <p className="subtitle">SHOP NOW</p>
        </div>
      </div>
    </div>
  </div>
)
export default HomePage;