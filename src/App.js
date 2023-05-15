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

  function deleteAllItems() {
    setItems([]);
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
      <header className="App-header">
        <div className='parent-container'>
          <div className='child-container'>
            <h4 className='heading'>Pending tasks</h4>
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
                placeholder="Add a new task"
                onChange={itemEvent}
                value={inputState}
              />
              <button className='buttonStyle' onClick={addItems}>
                Add
              </button>
              </div>
              <div>
              <button className='buttonStyle2' onClick={deleteAllItems}>
              Delete All
            </button>
            </div>
            
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
