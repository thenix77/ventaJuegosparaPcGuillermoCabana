
import { useState } from 'react'
import { useQueryClient } from 'react-query'
import { Link,  Outlet } from 'react-router-dom'
import Alert from '../../components/Main/Alert'
import ModalCart from '../../components/Main/ModalCard'
import { HookGames } from '../../Hooks/Users/Game.hook'
import { IGame } from '../../models/game.model'

export default  function Games() {

  const [isModal, setIsModal] = useState(false)
  const [game, setGame] = useState(null)

  const queryClient = useQueryClient()

  const { data:games , isLoading , isError, isFetching} = HookGames()


const handleCart = (id:number)=>{

   const juego = games.find((game:IGame)=> game.id === id)

  if( juego){
     setGame(juego)
     setIsModal(true)
  }

}

const handleCartClose = ()=>{
  setIsModal(false)
}

const lstGames = ()=>{
                  if(games)
                  return(
                    games.slice(0,60)
                        .map((game:IGame , n:number)=>
                        <div className="card m-1" style={{width: '18rem' }} key={'game-'+ n.toString()}>
                          <img className="card-img-top" src={game.thumbnail} alt={game.title} />
                          <div className="card-body">
                            <h5 className="card-title">{game.title}</h5>
                            <p className="card-text text-justify" style={{height:'130px'}}>
                              {game.short_description}
                            </p>
                            <div>
                              <Link to="#" className="btn btn-outline-primary btn-block mb-2" onClick={()=>handleCart(game.id)}>
                                <i className="fa-solid fa-cart-shopping"></i> agregar al carrito
                              </Link>
                              <Link to={game.id.toString()}
                                    className="btn btn-block mb-2 btn-outline-success "
                                    style={{color: queryClient.getQueryData(["games",game.id.toString()]) ? "purple" :'primary' }}
                              >
                                <i className="fa-solid fa-gamepad"></i> descripcion
                              </Link>
                            </div>
                          </div>
                        </div>
                    )
                  )
                  else
                  return (
                      <div className="card m-5" style={{width: '18rem'}} key={'game-empty'}>
                        <img className="card-img-top" src={''} alt="Card image cap" />
                        <div className="card-body">
                          <h5 className="card-title">Empty</h5>
                          <p className="card-text">no hay lista de juegos disponible</p>
                          <Link to="#" className="btn btn-primary">Recargar</Link>
                        </div>
                      </div>
                  )
                }
/*<li key={'game'+ n.toString()}
    className={''+
                queryClient.getQueryData(["games",game.id]) && "link-success"
              }
>
  <Link  to={game.id.toString()} > {game.title} </Link>
            </li>*/

 return (

    <>
      { isError &&  <Alert error={'Error de Conexion con el API'} /> }

      <ModalCart isModal={isModal} closed={handleCartClose} data={game}/>

      <div className="row justify-content-md-center mt-2">
        <div className="col-lg-5 col-10">
          <div className='h2 text-center'>
            { isLoading  && <i className="fa-solid fa-spinner fa-spin"></i> }
            { isFetching && <i className="fa-solid fa-spinner-third fa-spin"></i> }
            Lista de Juegos para Pc <Outlet />
          </div>
        </div>
      </div>

        <div className="d-flex flex-wrap  justify-content-center">

            { lstGames() }

        </div>


    </>
  )
}
