import React, { Fragment } from 'react'
import { Link, NavLink } from 'react-router-dom'
import CartWidget from './CartWidget'

export default function Navbar() {
  return (
    <Fragment>
      <nav className="navbar navbar-expand-lg navbar-dark bg-secondary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="#">
            <img src="/images/brand.jpg"  alt="" width="30" height="24" className="d-inline-block align-text-top" />
            Tienda VideoJuegos</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse d-flex justify-content-between" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink className={({isActive})=> isActive ?"nav-link active":'nav-link'} to="/">Games</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className={({isActive})=> isActive ?"nav-link active":'nav-link'} to="/home/users">usuarios</NavLink>
              </li>
             {/* <li className="nav-item">
                <NavLink className={({isActive})=> isActive ?"nav-link active":'nav-link'} to="#">Pricing</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className={({isActive})=> isActive ?"nav-link active":'nav-link'} to='#'>Disabled</NavLink>
  </li>*/}
            </ul>
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink className={({isActive})=> isActive ?"nav-link active":'nav-link'} to='#'><i className="fa-solid fa-cart-shopping"></i> </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>

    </Fragment>
  )
}
