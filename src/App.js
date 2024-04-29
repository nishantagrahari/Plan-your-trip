import {useState} from "react";
import './index.css';


const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: true },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 3, description: "Charger", quantity: 12, packed: false },
  { id: 4, description: "USB", quantity: 12, packed: false },

];

function App() {
  return (
    <div className='app'>
     <Logo />
     <Form />
     <PackingList />
     <Stats />
    </div>
  )
}

function Logo(){
  return (
    <h1>🏕️ Add items for your trip📍</h1>
  )
}

function Form(){
  const [description,setDescription]=useState("") //description will contain null value
  const [quantity,setQuantity]=useState("1")
  

  function handleAdd(e){ //e is event
    e.preventDefault()  // to prevent reload of page from form tag
    
    if(!description) return  // if entered item is null
    const enteredItem={description,quantity,packed:false,id:description}
    console.log(enteredItem)

    setDescription("") //once it is submitted show the default value in input
    setQuantity(1) // also set the quantity for the view to 1
  
        
  }

   return (
    <form className='add-form' onSubmit={handleAdd}>
     <h3>Add items for your trip</h3>
     {/* to set the value of select as null and change the text when required */}
     <select value={quantity}  
     onChange={(e)=>setQuantity(Number(e.target.value))}
     > 
      <option value={1}>1</option>
      <option value={2}>2</option>
      <option value={3}>3</option>
      <option value={4}>4</option>
     </select>
     <input type="text" placeholder="Item..." 
     value={description} 
     onChange={(e)=>setDescription(e.target.value)}
     />
     <button onClick={handleAdd}>Add</button>
    </form>
   )
}

function PackingList(){
  return(
    <div className="list">
      <ul>
      {initialItems.map(item=>
      <Item item={item}/>)}
     </ul>
    </div>
     
  )
}

function Stats(){
  return (
    <footer class="stats">
      <em>You have X items in your list and you already packed X (x%)</em>  
    </footer>
  )
}

//passing item prop from parent component
function Item({item}){
  return(
    <li>
      <span 
        style={item.packed ? {textDecoration:"line-through"}:{}}>
        {item.quantity} {item.description}
      </span>    
      <button>❌</button>  
    </li>

  )

}

export default App;
