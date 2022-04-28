import React from 'react'

interface IProps{
  greeting:string
}

export default function ItemListContainer(props:IProps) {
  return (
    <div>
      { props.greeting }
    </div>
  )
}
