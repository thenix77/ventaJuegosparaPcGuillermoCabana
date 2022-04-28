import React, { Fragment } from 'react'
import Alert from '../../components/Main/Alert'

import { HookUserGet, HookUserInsert, HookUserUpdate, HookUserUpdateEnable } from '../../Hooks/Users/User.Hook'
import { IUser } from '../../models/users.model'

export default function Users() {

  const { data:Users ,/*isLoading ,*/error,isError,isFetching /*cuando se recarga al cache*/} = HookUserGet()
  const { mutate:userInsert       , isSuccess:isSuccessInsert, isError:isErrorInsert , reset:resetInsert} = HookUserInsert()
  const { mutate:userUpdate       , isSuccess:isSuccessUpdate, isError:isErrorUpdate , reset:resetUpdate} = HookUserUpdate()
  const { mutate:userUpdateEnable , isSuccess:isSuccessEnable, isError:isErrorEnable , reset:resetEnable} = HookUserUpdateEnable()


  const handleInsert = (user:IUser )=>{
        userInsert(user ,{
          onSuccess:()=>{
            //limpiar los inputs, combos
            resetInput()
          }
      })
  }

  const handleUpdate = (id:string,user:IUser )=>{
      userUpdate({id,user} ,{
        onSuccess:()=>{
          //limpiar los inputs, combos
          resetInput()
        }
      })
  }

  const handleUpdateEnable = (id:string, active:boolean )=>{
    userUpdateEnable({id, active})
  }

  const resetInput = ()=>{
    /*setNombre('')
    setCorreo('')
    setUsuario('')*/
  }



  const lstUsers = ()=>{

            if(Users)
            return(
                Users.map((user:IUser,i:number)=>{
                  return(
                    <tr key={'users-' + i.toString()}>
                      <td align='center'>{i+1}</td>
                      <td align='center'>{user.name}</td>
                      <td align='center'>{user.email}</td>
                      <td align='center'>{user.username}</td>
                      <td align='center'>
                        <button className='btn btn-outline-info btn-sm'><i className="fa-solid fa-eye"></i></button>{" | "}
                        {
                          user.active ?
                          <button className='btn btn-outline-success btn-sm'
                                  onClick={() => handleUpdateEnable( user.id,false)}
                          >
                            <i className='fa-solid fa-circle-up'></i>
                          </button>
                          :
                          <button className='btn btn-outline-danger btn-sm'
                               onClick={() => handleUpdateEnable( user.id,true)}
                            >
                            <i className='fa-solid fa-circle-down'></i>
                          </button>
                        }
                      </td>
                    </tr>
                  )
                })
            )
            else
                return(
                  <tr>
                    <td> Empty </td>
                  </tr>
                )
  }




  return (
    <Fragment>
      {
        (isError || isErrorEnable || isErrorInsert || isErrorUpdate )? <Alert error={error} /> :<></>
      }
      <div className="row justify-content-md-center">
        <div className="col-5 ">
          <div className="card w-100">
            <div className="card-header bg-secondary text-white">
              <h4 className="card-title">
                {isFetching ? <i className="fa-solid fa-atom fa-spin"></i> : <i className="fa-solid fa-users-between-lines"></i> }
                  {" "}Lista de Usuarios
              </h4>
            </div>
            <div className="card-body">
              {
                isSuccessEnable &&
                <div className="alert alert-success alert-dismissible fade show" role="alert">
                  <strong>Users</strong> se realizo los cambios
                  <button type="button"
                          className="close"
                          data-dismiss="alert"
                          aria-label="Close"
                          onClick={resetEnable}
                          >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
              }
              <div className="table table-bordered table-striped table-responsive">
                <thead className='bg-primary text-white'>
                  <tr>
                    <td align='center' width={'5%'}>id</td>
                    <td align='center' width={'25%'}>Nombre</td>
                    <td align='center' width={'25%'}>Correo</td>
                    <td align='center' width={'25%'}>Usuario</td>
                    <td align='center' width={''}></td>
                  </tr>
                </thead>
                <tbody>
                  {
                    lstUsers()
                  }
                </tbody>
              </div>
            </div>
          </div>
        </div>
      </div>

    </Fragment>
  )
}
