import { createContext } from "react"

interface IProduct{
  id:string
  cantidad:number
  date?: Date
  Products?:Function
}

const product = { id:'',cantidad:0}

export const CartContext = createContext<IProduct>({id:'',cantidad:0})