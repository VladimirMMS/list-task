

const All = ({list_task, allDelete, finishTask, finishState}) => {


    return (
        
        <div className = 'card' style = {{marginTop:'30px'}}>
            <div className = 'card-body'>
                <div className = 'header-card' style = {{textAlign:"right"}}>
                    <h3 className = 'card-title text-right'>
                        {list_task.title}
                        <button className = "btn btn-sm btn-success ml-2" onClick = {()=> finishTask(list_task.id)}>
                            {list_task.completed ? "Finished": "To Finish"}
                            
                        </button>
                    </h3>
                    
                    <p className = 'card-text text-right'>
                        {list_task.description}
                    </p>
                </div>
                <hr/>
                <div className = 'd-flex justify-content-end'>
                <button className = 'btn btn-sm btn-primary'>
                    Edit
                </button>
                <button className = 'btn btn-sm btn-danger' style = {{marginLeft:"6px"}} onClick= {()=>allDelete(list_task.id)}>
                    Delete
                </button>
                </div>
                
            </div>
        </div>
      
    )
}

export default All;