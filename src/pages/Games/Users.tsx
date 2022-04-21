import React, {  Fragment } from 'react'
import {  NavLink, Outlet, useLocation, useSearchParams } from 'react-router-dom'
import Alert from '../../components/Main/Alert'
import ctrlDataUsers from '../../controllers/ctrlDataUsers.ctrl'
import { IUser } from '../../models/users.model'

interface Props  {}


export default function Users(props:Props):JSX.Element {

  const {users, error} = ctrlDataUsers.getUsers()

  const [searchParams, setSearchParams] = useSearchParams()

  const location = useLocation()

  const filtro = searchParams.get('filter') ?? '' //filter es la url linea 33


  const handleFilter = (event: React.ChangeEvent<HTMLInputElement>)=>{

      event.preventDefault()

      setSearchParams({ filter: event.target.value})

  }

  const handleListaUsers = ()=>{
    return (
            users.filter((user:IUser)=>{
                      if(!filtro) return true
                      else return user.name.toLowerCase().includes(filtro.toLowerCase())
                    }
                  )
                 .map((user:IUser, i:number)=>
                  <li className="list-group-item" key={'lst-user'+ i.toString()}>
                    <NavLink to={ user.id.toString() + location.search}
                          className={({isActive})=> isActive? 'active' : ''}
                          >{user.name}</NavLink>
                  </li>
          )
    )
  }


  return (
    <Fragment>
      <Alert error={error} />
      <div className='h1'>Users</div>
      <hr />
      <div className="row">
        <div className="col-4">
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text" id="filter">
                <i className='fas fa-search'></i>
              </span>
            </div>
            <input
                  id='filter'
                  type="text"
                  name='filter'
                  className="form-control"
                  placeholder="buscar"
                  onChange={handleFilter}
                  value={ filtro}
                   />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-3">
          <ul className="list-group ml-3">
          {
            users ?
            <>
              { handleListaUsers() }
            </>
            :
            <>
              <li className="list-group-item">Empyt</li>
            </>
          }
      </ul>
        </div>
        <div className="col-7">
          <Outlet />
        </div>
      </div>
    </Fragment>
  )
}

