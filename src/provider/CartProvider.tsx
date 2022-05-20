import React, { useMemo, useState } from 'react'
import { CartContext } from './CartContext'



interface IProps {

    id:string
    cantidad:number
    date?: Date
    Products?:Function

}

export default function CartProvider(props:IProps) {

  const [id, setId] = useState('')
  const [cantidad, setCantidad] = useState(0)
  const [products, setProducts] = useState([])



  const handleUpdate = (product:IProps)=>{

    const newProduct = Object.assign({...products}, product)

    setProducts(newProduct)

    return products
  }

  const value = useMemo(()=>{
    return({
      id,
      cantidad,
      Products:handleUpdate
    })
  },[id,cantidad])

  return (
    <CartContext.Provider value={value} {...props} />

  )
}
