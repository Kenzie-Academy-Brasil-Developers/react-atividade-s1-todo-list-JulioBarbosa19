import { useState } from "react"

const Form = ({addTodo}) =>{
    const [inputado, setInputado] = useState('');
    return(
        <div>
        <input type="text" 
          onChange={(e) => setInputado(e.target.value)}    
        />
        <button onClick={() => addTodo(inputado)}>Adicionar Tarefa</button>
        </div>
    )
}

export default Form;