import React, {useState, useRef} from 'react';

function DragDrop ({data}){
    const {list, setList} = useState(data);
    const dragItem = useRef();

    const handleDragstart = (e, params) => {
        console.log('Drag Starting', params)
        dragItem.current = params;
    }

    return (
        <div className='drag-drop'>
        {data.map((grp, grpI) => (
          <div key={grp.title} className='dnd-group'>
              <div className="group-title">{grp.title}</div>
            {grp.items.map((item, itemI) => (
                <div draggable onDragStart={(e) => {handleDragstart(e, {grpI, itemI})}} key={item} className='dnd-item'>
                {item}
                </div>
            ))}
            </div> 
        ))}
        </div>
     )
   }

export default DragDrop