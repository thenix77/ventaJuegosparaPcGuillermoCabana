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
            {' '}Tienda VideoJuegos
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="d-flex w-100 justify-content-between" >
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/">Games</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className={({ isActive }) =>
                  isActive ? 'bg-green-500 font-bold' : 'bg-red-500 font-thin' } to='#'>
                    usuarios
                  </NavLink>
              </li>

              <li className="nav-item dropdown">
                <NavLink  className="nav-link dropdown-toggle" to="#" id="navMenu" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Categorias
                </NavLink>
                <ul className="dropdown-menu" aria-labelledby="navMenu">
                  <li><NavLink className="dropdown-item" to="#">Acción</NavLink></li>
                  <li><NavLink className="dropdown-item" to="#">Aventura</NavLink></li>
                  <li><NavLink className="dropdown-item" to="#">Pelea</NavLink></li>
                </ul>
              </li>
            </ul>
          </div>
          <ul className="navbar-nav">
            <li className="nav-item">
              <CartWidget />
            </li>
          </ul>
          </div>

        </div>
      </nav>
    </Fragment>
  )
}
