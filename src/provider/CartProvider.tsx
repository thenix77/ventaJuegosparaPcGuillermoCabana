import React, { useMemo, useState } from 'react'
import { CartContext } from './CartContext'

export interface ICart {

    id:string
    cantidad:number
    date?: Date
    //Products?:Function

}

export default function CartProvider(props:any) {

  const [id, setId] = useState('')
  const [cantidad, setCantidad] = useState(0)
  const [products, setProducts] = useState([])



  const handleUpdate = (id:any, cantidad:any)=>{

    const product:any = {id, cantidad , date: new Date()}

    const newProduct:any = Object.assign(products,product) //products.concat(product)

    setProducts(newProduct)

    return products
  }

  const handleProducts = ()=>{
    return products
  }


  const value = useMemo(()=>{
    return({
      id,
      cantidad,
      Products:handleProducts,
      addProducts:handleUpdate
    })
  },[id,cantidad])

  return (
    <CartContext.Provider value={value} {...props} />

  )
}
