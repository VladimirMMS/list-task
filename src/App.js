import AllForm from "./components/AllForm"
import AllList from "./components/AllList"


const App = () => {
    return (
        <div className = 'container mt-4'>
            <div className = 'row'>
                <div className = 'col-8'>
                    <AllList/>
                </div>
                <div className = 'col-4'>
                    <AllForm/>
                </div>
            </div>
        </div>   
    )
}


export default App