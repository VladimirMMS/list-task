
import All from "./All"


const AllList = ({state, allDelete}) => {


    return (
        <>
        <h1>I am AllList</h1>
            {
                state.map(each => <All list_task = {each} key = {each.id} allDelete = {allDelete}/>)
            }
            
        </>
    )
}


export default AllList