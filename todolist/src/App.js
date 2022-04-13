import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import TodoList from './Components/TodoList/TodoList';
import Form from './Components/Form/Form';
function App() {
 const [todos, setTodos] = useState([]);

 const addTodo = (newTodo) =>{
    setTodos([...todos, newTodo]);
    console.log('Olá');
 }

 const handleTodo = (itemTodo) =>{
    const itemFiltrado =  todos.filter((elemento) =>{
       return elemento != itemTodo;
     })
     setTodos(itemFiltrado)
 }
  return (
    <div className="App">
      <header className="App-header">
       <Form addTodo={addTodo}/>
       <TodoList todos={todos} handleTodo={handleTodo} />
      </header>
    </div>
  );
}

export default App;
