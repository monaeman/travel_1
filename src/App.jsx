import { useState } from 'react'
import Logo from './components/Logo'
import Form from './components/Form'
import Stats from './components/Stats'
import PackingList from './components/PackingList'
import Item from './components/Item'



const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: true },
  { id: 2, description: "Socks", quantity: 12, packed: false },
];


 



function App() {

  const [items, setItems] = useState(initialItems);

  const handleAddItems = (item) => {
    setItems(
      [
        ...items,
        item 
      ]
    )
  }

  const handleDeleteItem = (id) => {
    //filter out the id that matches the object id
    setItems(items.filter(item => item.id !==id))

    

  }

  const handleToggleItem = (id) =>{

    setItems((items) =>items.map((item)=> item.id === id ? {
      ...item,
      packed:!item.packed 
    } :item))

    
  }
  return (
    <div className='app'>
      <Logo />
      <Form onAddItems={handleAddItems}/>
      
      <PackingList 
      //initialItems={initialItems}
      items ={items} 
      onDeleteItem ={handleDeleteItem}
      onToggle={handleToggleItem}

      />
      <Stats  items={items}/>
    </div>
  )
}

export default App;

