import { useState } from "react" 
import Expenses from './Expenses';

function Form() {
    const [title ,setTitle]=new useState("");
    const [amount ,setAmount]=new useState(0);  
    const [editId ,seteditId]=new useState(0);  
    const [isEdit ,setisEdit]=new useState(false);  

    
    // Array to store all the transactions
    const [logs , setLogs]=new useState([]);  

    function handlesubmit(event){
      console.log("Submitted")
      event.preventDefault()
      addExpense()
  
  }
  function deleteExpense(id){
    console.log("Expense id "+id);
    const newLogs = logs.filter((log)=>{return log.id!==id})
    setLogs(newLogs);
  }
  function addExpense(){
    if(!isEdit){
      const newExpense={id:Date.now(),title , amount}
    setLogs([...logs  , newExpense])
    }
    else{
      logs.map((log)=>{
        if(log.id===editId){
          log.title=title;
          log.amount=amount;
        }
      })
      seteditId(0)
      setisEdit(false)
    }
    
    console.log(logs);
  }
  function editExpense(id){
    console.log("Editing:"+id);
    seteditId(id)
    setisEdit(true)
    const curObj = logs.find((log)=>{return log.id===id})
    
    setTitle(curObj.title)
    setAmount(curObj.amount)
  }
  return (
    <>
    <div className='container-fluid mt-3'>
    <form onSubmit={handlesubmit}>
    <fieldset disabled="">
    
    <div className="mb-3">
        
        <input
        type="text"
        className="form-control"
        placeholder="Title of Transaction"
        onChange={(event)=>{setTitle(event.target.value)}}
        value={title}
        
        />
    </div>
    <div className="mb-3">
    <input
        type="number"
        className="form-control"
        placeholder="Amount"
        onChange={(event)=>{setAmount(event.target.value)}}
        value={amount}
        />
    </div>
   
    <button  type="submit" className="btn btn-primary">
        {isEdit?"Edit":"Add"}
    </button>
    </fieldset>
    </form>
    </div>
    <hr />
    {
      logs.map((item)=>{
        return <ol className="list-group list-group-numbered">
                <Expenses key={item.id} id={item.id} title={item.title} amount={item.amount} editFunc={editExpense} deleteFunc ={deleteExpense}/>
          </ol>
    })
    }

    </>
    
  )
}

export default Form