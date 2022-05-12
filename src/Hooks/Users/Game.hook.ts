import { useQuery } from "react-query";
import { getDataGames, getDataGamesxId } from "../../controllers/ctrlDataGames.ctrl";

export function HookGames(){
  return  useQuery(["games"], getDataGames, {
            // refetchInterval:3000, //valida si la informacion es correcta
            //refetchOnWindowFocus:false //no refresca cuando cambio ventana
            staleTime: 3600000, //1h = 1000*60*60 //entiende cuanto tiempo estan los datos actualizados
            retry: 2, //cantidad de intentos al servidor
            retryDelay: 5000 // 5seg= 5*1000  //tiempo entre cada reintento
          })

}

export function HookGamexId(id:string){


  return useQuery(["games", id], () => getDataGamesxId(id), {
                  // refetchInterval:3000, //valida si la informacion es correcta
                  //refetchOnWindowFocus:false //no refresca cuando cambio ventana
                  staleTime: 3600000, //1h = 1000*60*60 //entiende cuanto tiempo estan los datos actualizados
                  retry: 2, //cantidad de intentos al servidor
                  retryDelay: 5000 // 5seg= 5*1000  //tiempo entre cada reintento
  })

}

export function HookGamexIdxIsLoading(id: string, isLoading:boolean) {


  return useQuery(["games-loading", id], () => getDataGamesxId(id), {
    enabled: !isLoading
  })

}