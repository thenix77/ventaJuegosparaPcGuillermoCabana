

interface IProps{
  isModal: boolean
  data:any
  closed:Function
}

export default function ModalCart(props:IProps) {

  const handleModalClose = ()=>{
    props.closed(false)
  }


  return (
  <div className="modal" style={{display: props.isModal ? 'block':'none'}} tabIndex={-1}>
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">{props.data ? props.data.title :<i className="fa-solid fa-loader fa-spin"></i>}</h5>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div className="modal-body">
          <div className="d-flex justify-contents-center align-items-center">
            <div className="w-50">
              <img className="card-img-top" src={props.data && props.data.thumbnail} alt={props.data && props.data.title} />
            </div>
            <div className="w-50 h-50 d-flex text-center justify-contents-around ">
              <button className="btn btn-outline-primary"><i className="fa-solid fa-cart-plus"></i></button>
              <span>
                <span>5</span>
                <span>de 10</span>
              </span>
              <button className="btn btn-outline-danger"><i className="fa-solid fa-cart-shopping"></i></button>
            </div>
          </div>
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-secondary" onClick={()=>handleModalClose()}>Close</button>
          <button type="button" className="btn btn-primary">comprar</button>
        </div>
      </div>
    </div>
  </div>
  )
}
