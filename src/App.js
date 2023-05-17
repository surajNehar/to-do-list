import './App.css';
import { useState } from 'react';
import TodoList from './components/molescules/todo-list/todo-list';

function App() {
  const [inputState, setInputState] = useState('');
  const [items, setItems] = useState([]);

  function itemEvent(event) {
    setInputState(event.target.value);
  }

  function addItems() {
    if (inputState.trim() !== '') {
      setItems((oldItems) => [...oldItems, inputState]);
      setInputState('');
    }
  }
  

  function deleteItem(index) {
    setItems((oldItems) => {
      const updatedItems = [...oldItems];
      updatedItems.splice(index, 1);
      return updatedItems;
    });
  }

  return (
    <div className="App">
      
    <h4 className='heading'> Enter your name here</h4>

            <div>
              <ul>
                {items.map((itemval, index) => (
                  <TodoList
                    key={index}
                    text={itemval}
                    index={index}
                    onSelect={deleteItem}
                  />
                ))}
              </ul>
            </div>

            <div>
              <input
                type='text'
                className='inputStyle'
                placeholder="add new user "
                onChange={itemEvent}
                value={inputState}
              />
              <button className='buttonStyle' onClick={addItems}>
                Submit
              </button>
            </div>
  </div>          
    
  );
}

export default App;
