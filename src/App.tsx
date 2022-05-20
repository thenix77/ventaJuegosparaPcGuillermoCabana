import React, { Component } from 'react'
import { HistoryRouterProps, Navigate, Outlet, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import About from './pages/About'
import Games from './pages/Games/Games'
import Home from './pages/Home'
import User from './pages/users/User'
import Users from './pages/users/Users'
import Game from './pages/Games/Game'
import { RequireAuth } from './components/Auth/RequireAuth'
import Login from './pages/Auth/Login'

interface Props {}

interface State {}

export default class App extends Component<Props, State> {

  render() {
    return (
      <div>

        <Routes>
          <Route path='/' element={<Layout />}>
           {/* <Route index element={<Login />} /> */}
            <Route  index element={ <Games /> }/>
            <Route path=':id' element={ <Game />} />

            <Route path='home' element={//<RequireAuth>
                                            <Outlet />
                                        /*</RequireAuth>*/
                                        }>
              <Route index element={<Home />}/>

              <Route path='users' element={ <Users /> }>
                <Route index element={<div>Seleccione un usuario</div>}/>
                <Route path=':id' element={ <User />} />
              </Route>
              <Route path='about' element={<About />}/>
              <Route path='*' element={<Navigate replace to='/' />}/>
            </Route>
          </Route>
        </Routes>


      </div>
    )
  }
}
