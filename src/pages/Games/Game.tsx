import React from 'react'
import { useQuery } from 'react-query'
import { useNavigate, useParams } from 'react-router-dom'
import { getDataGamesxId } from '../../controllers/ctrlDataGames.ctrl'

export default function Game() {

  const params = useParams()
  const navigate = useNavigate()

  const id = params.id?? '0'

  const { data:game ,
    isLoading ,
    isError,
    isFetching //cuando se recarga al cache
  }
    = useQuery(["games", id],()=> getDataGamesxId(id),{
     // refetchInterval:3000, //valida si la informacion es correcta
      //refetchOnWindowFocus:false //no refresca cuando cambio ventana
      staleTime: 3600000, //1h = 1000*60*60 //entiende cuanto tiempo estan los datos actualizados
      retry:2, //cantidad de intentos al servidor
      retryDelay: 5000 // 5seg= 5*1000  //tiempo entre cada reintento
    })

    const handleReturn = ()=>{
      navigate(-1)
    }


  return (
    <>
      {
        game &&
        <div className="jumbotron container mt-5" style={{background:'#EFF'}}>
          <h1 className="display-4">
            <img src={game.thumbnail} alt="" />{ game.title}
            <p className="lead">{game.short_description}</p>
          </h1>

          <hr className="my-4" />
          <p>
            {  game.description}
          </p>
          <p className="lead">
            <button className='btn btn-outline-danger btn-sm mr-1 ' onClick={handleReturn}><i className="fa-solid fa-hand-point-left"></i> return </button>
            <a className="btn btn-outline-info btn-sm" href={ game.game_url} role="button">Link Page</a>
          </p>
        </div>
      }
      {
        isLoading && <i className="fa-solid fa-atom fa-spin"></i>
      }
      {
       isFetching && <i className="fa-solid fa-atom fa-spin"></i>
      }
    </>

  )
}
