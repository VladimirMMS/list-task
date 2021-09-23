import AllForm from "./components/AllForm"
import AllList from "./components/AllList"
import { useState } from "react"

const initAll = [
    {
        id:1,
        title: 'All #1',
        description: 'Descrip from all #1',
        completed:false

    },

    {
        id:2,
        title: 'All #2',
        description: 'Descrip from all #2',
        completed:false
    },

    {
        id:3,
        title: 'All #3',
        description: 'Descrip from all #3',
        completed:false
    }
]

const App = () => {

    const [all, setAll] = useState(initAll)

    const allDelete = (allId) => {
        
        const changedAll = all.filter(each => {
            return each.id !== allId
        })

        setAll(changedAll)

    }

    return (
        <div className = 'container mt-4'>
            <div className = 'row'>
                <div className = 'col-8'>
                    <AllList state = {all}
                            allDelete = {allDelete}
                    />
                </div>
                <div className = 'col-4'>
                    <AllForm/>
                </div>
            </div>
        </div>   
    )
}


export default App