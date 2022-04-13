import './index.css'
const TodoList = ({todos, handleTodo}) =>{
   return(
       <div>
       <ul>{
           todos.map((element, index) => (
                 <div className='container'>
                <li className='tarefa' key={index} >{element}</li>
                <button className='botao' onClick={() => handleTodo(element)}>Concluir Tarefa</button>
                </div>
           ))}
          
       </ul>
       
       </div>
   )
}

export default TodoList;