import React, { Fragment } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Alert from '../../components/Main/Alert'
import ctrlDataUsers from '../../controllers/ctrlDataUsers.ctrl'



export default function User(): JSX.Element{

  const params = useParams()
  const navigate = useNavigate()

  const id = params.id?? '0'

  const {user, error} = ctrlDataUsers.getUserxId(parseInt(id))

  const handleDelete =()=> {

    ctrlDataUsers.getUserDeletexId(parseInt(id))

    navigate('/users', { replace:true}) //evita el atras
  }

   return (
    <Fragment>
        <Alert error={error} />
      {
        user  ?
        <div className="card m-5" style={{width:'20rem'}}>
          <div className="card-header">
            { user?.name}
          </div>
          <div className="card-body">
            <ul>
              <li>{ user.username }</li>
              <li>{ user.email }</li>
            </ul>
          </div>
          <div className="card-footer text-right">
            <button className='btn btn-md btn-outline-danger' onClick={handleDelete}>
              <i className='fa fa-trash-alt'></i> eliminar
            </button>
          </div>
        </div>
        :
        <>
          usuario desconocido
        </>
      }


    </Fragment>
  )
}
