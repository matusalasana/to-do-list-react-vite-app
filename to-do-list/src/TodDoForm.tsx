
import { useRef } from "react";

interface props{
  onClickAdd:(text:string)=>void
}

function TodDoForm({onClickAdd}:props) {
    const taskRef=useRef<HTMLInputElement>(null)


      

  return (
    <div>

        <div className="form-floating mb-3">
            <input ref={taskRef} type="text" className="form-control" id="floatingInput" placeholder="name@example.com"/>
            <label htmlFor="floatingInput">enter your text here</label>
        </div>

        <button 
          onClick={()=>
            taskRef.current!==null 
              && (
                  (onClickAdd(taskRef.current.value),taskRef.current.value==''),
                  taskRef.current.value=''
                )}  
          type="button" className="btn btn-secondary">ADD</button>

        

              
    </div>
  )
}

export default TodDoForm