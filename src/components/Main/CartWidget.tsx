import React from 'react'

export default function CartWidget() {
  return (
  <button type="button" className="btn btn-primary position-relative">
    <i className="fa-solid fa-cart-shopping"></i>
    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
      99
    </span>
  </button>
  )
}
