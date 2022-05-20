import db from "../config/firebase"
import { addDoc, collection } from 'firebase/firestore'


class CtrlCart {

  cartAddBuy(id:string , cantidad:number, fecha:Date , state:boolean){

    addDoc(collection(db, "db_carts"), { id, cantidad, fecha, state })
      .then(
        () => {   }
      )

  }

}

const ctrlCart = new CtrlCart()
export default ctrlCart