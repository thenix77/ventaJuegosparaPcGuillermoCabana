import React, { Fragment } from 'react'
import { useQuery, useQueryClient } from 'react-query'
import { useNavigate, useParams } from 'react-router-dom'
import Alert from '../../components/Main/Alert'
import  { getDataUsers } from '../../controllers/ctrlDataUsers.ctrl'



export default function User(): JSX.Element{

  const params = useParams()
  const navigate = useNavigate()

  const queryClient = useQueryClient()

  const { data:users ,
          error,
          isLoading ,
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

  const handleReturn =() => {
    navigate(-1)
  }

   return(
     <>
      {
        isError && <Alert error={error} />
      }
      <div className="row">
        <div className="col-6">

        </div>
      </div>

     </>
   )
}
