import React from 'react'

function App() {
  return (
    <div>
      <h1>TO DO</h1>
        import React, { useState } from 'react'

function NewApp() {
    const [items, setItems] = useState([
      ]);
    let [newItem, setNewItem] = useState("")
    
    const handleChecked = (id) => {
        let newListItems = items.map((item) =>
          item.id === id ? { ...item, checked: !item.checked } : item
        );
        
        setItems(newListItems);
      };
      const handleDelete = (id) => {
        let newItems = items.filter((item) => item.id !== id);
        setItems(newItems);
      };
      const addItem = () => {
        if (newItem === "") return;
        setItems([
            ...items, 
            { id: items.length + 1, label: newItem, checked: false }
        ]);
        setNewItem("");
    };
  return (
    <>
    <div>
        <input type="text" 
        value={ newItem } 
        placeholder="Add New Item"
        onChange={(e)=>{
            setNewItem(e.target.value)
        }}
        onClick={()=>{
            add
        }}
        />
        <button on onClick={()=>{
            addItem()
        }}>Add</button>
    </div>
    
    <ul>
          {items.map((item) => (
            <li key={item.id} className='item'>
              <input
              type="checkbox"
              checked={item.checked}
              onChange={() => handleChecked(item.id)}
            />
              <label>{item.label}</label>
              <button onClick={() => handleDelete(item.id)}>Delete</button>
            </li>
          ))}
    </ul>
    </>
        
      );
}

export default NewApp
        
    </div>
  )
}

export default App
