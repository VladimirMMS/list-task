

const All = (props) => {

    console.log(props)
    return (
        <div>
            <h1>I am AllList</h1>
            <div className = 'card'>
                <div className = 'card-body'>
                    <div className = 'header-card' style = {{textAlign:"right"}}>
                        <h3 className = 'card-title text-right'>
                            {props.list_task.title}
                            <button className = "btn btn-sm btn-success ml-2">
                                FInish
                            </button>
                        </h3>
                        
                        <p className = 'card-text text-right'>
                            {props.list_task.description}
                        </p>
                    </div>
                    <hr/>
                    <div className = 'd-flex justify-content-end'>
                    <button className = 'btn btn-sm btn-primary'>
                        Edit
                    </button>
                    <button className = 'btn btn-sm btn-danger' style = {{marginLeft:"6px"}}>
                        Delete
                    </button>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default All;