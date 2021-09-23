
import All from "./All"


const all1 = {
    title: 'All #1',
    description: 'Descrip from all #1',
    completed:false
}


const all2 = {
    title: 'All #2',
    description: 'Descrip from all #2',
    completed:false
}


const AllList = () => {
    return (
        <>
            <All list_task = {all1}/>
            <All list_task = {all2}/>
        </>
    )
}


export default AllList