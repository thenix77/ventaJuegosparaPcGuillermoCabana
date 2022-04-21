import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Alert from '../../components/Main/Alert'
import ctrlDataGames from '../../controllers/ctrlDataGames.ctrl'
import { IGame } from '../../models/game.model'

export default  function Games() {

  const [games, setGames] = useState([])
  const [error , setError] = useState(null)

  useEffect(() => {
    // declare the data fetching function
    const fetchData = async () => {
      await ctrlDataGames.getDataGames()
                         .then(function (response) {

                          setGames(response.data)

                          })

                      }

      fetchData()
      .catch(error => setError(error.message));
  }, [])

  const lstGames = () => {
   return games.slice(0,20).map((game:IGame , n:number)=>
                      <li key={'game'+ n.toString()}>
                        <Link  to={game.id.toString()} > {game.title} </Link>
                      </li>
                  )
  }


 return (
    <>
      <Alert error={error} />
      <ul>
        { lstGames() }
      </ul>

    </>
  )
}
