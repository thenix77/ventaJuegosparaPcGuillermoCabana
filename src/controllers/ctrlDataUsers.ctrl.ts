import axios from "axios"
import { IUser } from "../models/users.model"

 export const getDataUsers = async() =>{

  const {data } =   await axios.get('/data/users.json')

    return  data as IUser[]
  }