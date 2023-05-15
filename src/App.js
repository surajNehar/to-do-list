import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import TodoList from './components/molescules/todo-list/todo-list';
// import TodoList from './components/molescules/todo-list/todo-list';


function App() {
const[inputState,setInputState] =useState()
const[items,setItems]=useState([])

function itemEvent(event){
  setInputState(event.target.value)
}

function additems(){
  setItems((oldItems)=> {
    return [...oldItems, inputState]
   })
  setInputState(" ")
}

function deleteItems(i){
  console.log("deleted")
  const updatelist =oldItems.filter((ele,id) => {
    return i!=id
 
  })
 return setItems(updatelist)
   
}
  return (
    <div className="App">
      <header className="App-header">
        <div className='parent-container'>
        <div className='child-container'>
          <h4 className='heading'>Pending tasks </h4>
          <div>
            <ul>
           {
           items.map((itemval,i) => {
              return <TodoList 
              key={i}
              index={i}
             text={itemval}
             onselect={deleteItems}
              />
              })}
           
           
            </ul>
           </div>

          <div>
          <input type='text'
          className='inputStyle '
          placeholder="Add a new task"
          onChange={itemEvent}
          value={inputState}
          />
          <button className='buttonStyle'
          onClick={additems}>Add</button>
        </div>
        </div>

      {/* <TodoList/> */}
      </div>
      </header>
      
    </div>
  );
}

export default App;
