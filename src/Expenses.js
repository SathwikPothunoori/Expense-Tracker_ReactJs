import React from 'react'

function Expenses(props) {
  return (
    <>
    <li className="list-group-item d-flex justify-content-between align-items-start">
  <div className="ms-2 me-auto">
  <div className="fw-bold">{props.id}</div> 

  <div className="fw-bold">{props.title}</div> 
  </div>

  <span className="badge bg-primary rounded-pill">{props.amount}</span>
  <div>
    <i class="fa-solid fa-trash" onClick={()=>{props.deleteFunc(props.id)}}></i>
    <i class="fa-solid fa-pen-to-square" onClick={()=>{props.editFunc(props.id)}}></i>
  </div>
</li>

    </>
    
  )
}

export default Expenses 