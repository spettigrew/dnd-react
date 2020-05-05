import React from "react"
import './App.css'
import DragDrop from "./components/DragDrop"

const data = [
    {title: 'Group 1', items: ['Item 1', 'Item 2', 'Item 3']},
    {title: 'Group 2', items: ['Item 4', 'Item 5']},

]

function App() {
    return (
        <div className='App'>
            <header className='App-header'>
            <DragDrop data={data}/>
            </header>
        </div>
    )
}


export default App;
