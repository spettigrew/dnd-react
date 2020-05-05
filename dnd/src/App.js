import React from "react"
import './App.css'

const data = [
    {title: 'group 1', items: ['1', '2', '3']},
    {title: 'group 2', items: ['4', '5']},

]

function App() {
    return (
        <div className='App'>
            <header className='App-header'>
                <div className='drag-drop'>
                {data.map((grp, grpI) => (
                  <div key={grp.title} className='dnd-group'>
                    {grp.items.map((item, itemI) => (
                        <div draggable key={item} className='dnd-item'>
                        {item}
                        </div>
                    ))}
                    </div> 
                ))}
                </div> 

                <div className='drag-drop'> 
                <div className="dnd-group"> 
                <div className="group-title">Group 1</div>
                <div className="dnd-item">
                    <div>
                    <p>Item 1</p>
                    </div>
                </div>
                <div className="dnd-item">
                    <div>
                    <p>Item 2</p>
                    </div>
                </div>
                </div>
                <div className="dnd-group"> 
                <div className="group-title">Group 2</div>
                <div className="dnd-item">
                    <div>
                    <p>Item 1</p>
                    </div>
                </div>
                <div className="dnd-item">
                    <div>
                    <p>Item 2</p>
                    </div>
                </div>
                </div>
                </div>
            </header>
        </div>
    )
}


export default App;
