import React, { Fragment } from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <Fragment>
      <nav className='navbar navbar-expand-lg navbar-dark bg-secondary '>
        <Link to="#" className="navbar-brand">
          <img src="/images/brand.jpg" width={'30px'} alt="" />
          Tienda Ventas Juegos
        </Link>
        <button className='navbar-toggler' type='button' data-toggle='collapse'
                data-target='navbarNav'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className="collapse navbar-collapse" id='navbarNav'>
          <div className="navbar-nav">

            <li className="nav-item">
              <NavLink  className={ ({isActive})=> isActive ? 'nav-item nav-link active' : 'nav-item nav-link'  }
              to='/home' >home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to='/home/users' className="nav-item nav-link ">Users</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to='/' className="nav-item nav-link ">Games</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to='/home/about' className="nav-item nav-link ">about</NavLink>
            </li>
            <li className="nav-item dropdown">
              <NavLink className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" >
                Categoria
              </NavLink>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><Link className="dropdown-item" to="#">Action</Link></li>
                <li><Link className="dropdown-item" to="#">Aventura</Link></li>
                <li><hr className="dropdown-divider" /></li>
                <li><Link className="dropdown-item" to="#">Fighter</Link></li>
              </ul>
            </li>
          </div>
        </div>
      </nav>
    </Fragment>
  )
}
