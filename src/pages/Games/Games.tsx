import React from 'react'
import { useQuery, useQueryClient } from 'react-query'
import { Link,  Outlet } from 'react-router-dom'
import Alert from '../../components/Main/Alert'
import { getDataGames } from '../../controllers/ctrlDataGames.ctrl'
import { IGame } from '../../models/game.model'

export default  function Games() {

  const queryClient = useQueryClient()

const { data:games ,
        isLoading ,
        isError,
        isFetching //cuando se recarga al cache
      }
        = useQuery(["games"], getDataGames,{
         // refetchInterval:3000, //valida si la informacion es correcta
          //refetchOnWindowFocus:false //no refresca cuando cambio ventana
          staleTime: 3600000, //1h = 1000*60*60 //entiende cuanto tiempo estan los datos actualizados
          retry:2, //cantidad de intentos al servidor
          retryDelay: 5000 // 5seg= 5*1000  //tiempo entre cada reintento
        })

/*

  const [games, setGames] = useState([])
  const [error , setError] = useState(null)
  const [isLoading,setisLoading] = useState(false)

  useEffect(() => {
    // declare the data fetching function
    const fetchData = async () => {
      setisLoading(true)

      try{
        const data = await getDataGames()
        setGames(data)
        setError(null)

      }catch(error:any){
        setGames([])
        setError(error.message)
      }

      setisLoading(false)
    }


      fetchData()

  }, [])

*/

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
                              <Link to="#" className="btn btn-outline-primary btn-block mb-2"><i className="fa-solid fa-cart-shopping"></i> agregar al carrito</Link>
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
