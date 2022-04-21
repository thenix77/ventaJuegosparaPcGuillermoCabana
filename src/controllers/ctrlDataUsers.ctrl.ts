import { IUser } from "../models/users.model"

class CtrlDataUsers {
  private users:IUser[] = []
  private error:string|null = null

  constructor(){
    this.getDataUsers()
  }

  private async getDataUsers(){

    await fetch('/data/users.json')
          .then((db) => db.json())
          .then((data) => {
              this.users = data as IUser[]
           })
          .catch((err) => this.error = `conexion> API: FAIL => ${err.message}`)

    return  {users: this.users , error:this.error }
  }

  getUsers(){
    return  {users: this.users , error: this.error}
  }

  getUserxId(id:number){
    const {users, error}  = this.getUsers()


    if(error === null)
       return { user: users.find((user:IUser) => user.id === id) as IUser|null, error }
    else
       return { user:null  ,error }
  }

  getUserDeletexId(id: number) {

    const { users, error } = this.getUsers()

    if (error === null){
      const newUsers = users.filter((user: IUser) => user.id !== id)

      this.users = newUsers
    }

  }

}

const ctrlDataUsers = new CtrlDataUsers()
export default ctrlDataUsers