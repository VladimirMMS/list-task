import React, {useState} from 'react'

const inialState = {
    title: "",
    description:""

}

const AllForm = ({addTask}) => {

    const [formValues, setformValues] = useState(inialState);

    const {title, description} = formValues

    const getValue = (e) => {
        
        const data = {
            ...formValues,
            [e.target.name]: e.target.value
        }

        setformValues(data)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(e.target.title.value, e.target.description.value)
        addTask(e.target.title.value, e.target.description.value)
    
    

    }

    return (
        <div>
            <h1>New Task</h1>
            <form onSubmit = {handleSubmit}>
                <input 
                type= "text" 
                placeholder = 'Title' 
                className = 'form-control' 
                name = 'title' 
                value = {title} 
                onChange = {getValue}
                />

                <textarea 
                placeholder= 'Description' 
                className= 'form-control mt-2'  
                name = 'description' 
                value = {description} 
                onChange = {getValue}>

                </textarea>
                <button className='btn btn-primary btn-block mt-2'>Add Task</button>
            </form>
        
        </div>
    )

}


export default AllForm;

