

interface task{
  id:number;
  text:string;
}

interface props{
  tasks:task[];
  onClickDelete:(id:number)=>void
}

function TaskLists({tasks,onClickDelete}:props) {


  return (
    
    <>
    <div className="card text-center border border-primary">
      {tasks.map((task,order)=>task.text!==''&&
        <div className="card-body border border-secondary">
          <h5 className="card-title">{order}</h5>
          <p className="card-text">{task.text}</p>
          <button onClick={()=>onClickDelete(task.id)} className="btn btn-primary">delete</button>
        </div>
      )}
      
    </div>
  </>
)}

export default TaskLists