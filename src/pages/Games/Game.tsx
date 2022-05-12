import React from 'react'
import { useQuery } from 'react-query'
import { useNavigate, useParams } from 'react-router-dom'
import { getDataGamesxId } from '../../controllers/ctrlDataGames.ctrl'
import { HookGamexId } from '../../Hooks/Users/Game.hook'

export default function Game() {

  const params = useParams()
  const navigate = useNavigate()

  const id = params.id?? '0'

  const { data:game ,
    isLoading , isError, isFetching } = HookGamexId(id)

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
