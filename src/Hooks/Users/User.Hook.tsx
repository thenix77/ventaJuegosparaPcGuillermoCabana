import { useMutation, useQuery, useQueryClient } from "react-query";
import { getDataUsers, getDataUsersEnable, getDataUsersInsert, getDataUserUpdate } from "../../controllers/ctrlDataUsers.ctrl";
import { IUser } from "../../models/users.model";

export function HookUserGet(){

  return useQuery(["users"], getDataUsers, {
            //refetchInterval: 1000,// 1H = 60minx60segx1000  //Infinity, //3000, //valida si la informacion es correcta
          //  refetchOnWindowFocus: false, //no refresca cuando cambio ventana
            //    staleTime: 3600000, //1h = 1000*60*60 //entiende cuanto tiempo estan los datos actualizados
            retry: 2, //cantidad de intentos al servidor
            retryDelay: 5000 // 5seg= 5*1000  //tiempo entre cada reintento
          })

}

export function HookUserInsert(){

  const queryClient = useQueryClient()

  return useMutation(getDataUsersInsert,{
                                        onSuccess:(user)=>{
                                          queryClient.setQueriesData(["users"], (usersPrev:any) =>
                                            usersPrev.concat(user)
                                          )
                                         queryClient.invalidateQueries(["users"]) //revalida los datos
                                        }
                                      })

}


export function HookUserUpdate(){

  const queryClient = useQueryClient()

  return useMutation(getDataUserUpdate,{
                                        onSuccess:(user:IUser)=>{
                                          queryClient.setQueriesData(["users"], (usersPrev:any) => {
                                            const userId = usersPrev.findIndex((u:IUser)=> u.id === user.id )
                                            usersPrev[userId] = user

                                            return usersPrev

                                          })
                                         queryClient.invalidateQueries(["users"]) //revalida los datos
                                        }
                                      })

}

export function HookUserUpdateEnable(){

  const queryClient = useQueryClient()

  return useMutation(getDataUsersEnable,{
                                        onSuccess:(user)=>{
                                          queryClient.setQueriesData(["users"], (usersPrev:any) => {
                                            const userId =usersPrev.findIndex((u:IUser)=> u.id ===user.id )
                                            usersPrev[userId].active = user.active

                                            return usersPrev

                                          })
                                         queryClient.invalidateQueries(["users"]) //revalida los datos
                                        }
                                      })

}