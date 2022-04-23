import React, { Fragment } from 'react'
import { useQuery, useQueryClient } from 'react-query'
import Alert from '../../components/Main/Alert'
import { getDataUsers } from '../../controllers/ctrlDataUsers.ctrl'
import { IUser } from '../../models/users.model'

export default function Users() {

  const queryClient = useQueryClient()

  const { data:Users ,
          isLoading ,
          error,
          isError,
          isFetching //cuando se recarga al cache
        }
          = useQuery(["users"], getDataUsers,{
           // refetchInterval:3000, //valida si la informacion es correcta
            //refetchOnWindowFocus:false //no refresca cuando cambio ventana
            staleTime: 3600000, //1h = 1000*60*60 //entiende cuanto tiempo estan los datos actualizados
            retry:2, //cantidad de intentos al servidor
            retryDelay: 5000 // 5seg= 5*1000  //tiempo entre cada reintento
          })

  const lstUsers = ()=>{

            if(Users)
            return(
                Users.map((user:IUser,i:number)=>{
                  return(
                    <tr key={'users-' + i.toString()}>
                      <td align='center'>{user.id}</td>
                      <td align='center'>{user.name}</td>
                      <td align='center'>{user.email}</td>
                      <td align='center'>{user.username}</td>
                      <td align='center'>
                        <button className='btn btn-outline-info btn-sm'><i className="fa-solid fa-eye"></i></button>{" | "}
                        <button className='btn btn-outline-success btn-sm'><i className='fa-solid fa-circle-up'></i></button>
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
        isError && <Alert error={error} />
      }
      <div className="row justify-content-md-center">
        <div className="col-5 ">
          <div className="card w-100">
            <div className="card-header bg-secondary text-white">
              <h4 className="card-title">
                {isFetching ? <i className="fa-solid fa-atom"></i> : <i className="fa-solid fa-users-between-lines"></i> }
                  {" "}Lista de Usuarios
              </h4>
            </div>
            <div className="card-body">
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
