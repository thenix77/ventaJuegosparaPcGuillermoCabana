import { createContext } from "react"

interface IProduct{
  id:string
  cantidad:number
  date?: Date
  Products?:Function
  addProducts?:Function
}

const product = { id:'',cantidad:0}

export const CartContext = createContext<IProduct>(product)