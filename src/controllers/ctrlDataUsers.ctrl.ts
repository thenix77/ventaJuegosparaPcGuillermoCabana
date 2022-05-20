//import axios from "axios"
import { IUser } from "../models/users.model"

import db from "../config/firebase"
import { addDoc, collection ,  doc,  getDoc,  getDocs,  updateDoc } from 'firebase/firestore'


 export const getDataUsers = async() =>{

  let data:IUser[] = []

  //const {data } =   await axios.get('/data/users.json')

   const querySnapshot = await getDocs(collection(db,'db_users'))

   querySnapshot.forEach((doc) => {
    data.push({
      id: doc.id,
      name: doc.data().name,
      username: doc.data().username,
      email: doc.data().email,
      active: doc.data().active,
      password: doc.data().pswd

    })
  })

   return data.length > 0 ? data : [{ id: '', name: '', username: '', email: '', active: false, password: '' }]
}

export const getDataUserxId = async (id:string)=>{
  let data: IUser = { id: '', name: '', username: '' , email:'', active:false,password:'' }

  const querySnapshot = await getDoc(doc(db, "db_users",id))


      data.id       = id
      data.name     = querySnapshot.data()?.name
      data.username = querySnapshot.data()?.username
      data.email    = querySnapshot.data()?.email
      data.active   = querySnapshot.data()?.active
      data.password = querySnapshot.data()?.pswd
  return data
}


export const getDataUsersInsert = async (user: IUser) => {

  const Users: IUser[] = await getDataUsers()

  addDoc(collection(db,"db_users"),{user})
                                          .then(
                                            ()=>{
                                              Users.push(user)
                                            }
                                          )

  return Users
}

export const getDataUserUpdate = async ({ id, user }:any) => {

  let User: IUser = await getDataUserxId(id)


  updateDoc(doc(db,'db_users',id),{user})
                                        .then(
                                          ()=>{
                                            User = user
                                          }
                                        )

  return User
}

export const getDataUsersEnable = async ({id,active}:any) => {

  let User: IUser = await getDataUserxId(id)

  updateDoc(doc(db, 'db_users', id), { active })
    .then(
      () => {
        User.active = active
      }
    )

  return User
}