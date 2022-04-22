import {Server} from '../config/config'
import axios from 'axios'

//https://rapidapi.com/digiwalls/api/free-to-play-games-database



  export const getDataGames = async()=>{

    const { data  } = await axios.get(Server.serverApi,{
                            //method: 'GET',
                            //url: Server.serverApi,
                            headers: {
                              'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com',
                              'X-RapidAPI-Key': '1a2f61ec75msh4dbcd5486786637p11479djsn26ac796a5176'
                            }
                          }
                        )

     return data

  }

  export const  getDataGamesxId = async (id:string)=> {

    return await axios.request({
                            method: 'GET',
                            url: Server.serverApi,
                            params: { id: id },
                            headers: {
                              'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com',
                              'X-RapidAPI-Key': '1a2f61ec75msh4dbcd5486786637p11479djsn26ac796a5176'
                            }
                          })

  }




