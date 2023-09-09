import { v4 as uuidv4 } from 'uuid';
// a list of todos, each todo object has a task and an id
const todos = [
    { task: "mow the yard", id: uuidv4() }, 
    { task: "Work on Odin Projects", id: uuidv4() },
    { task: "feed the cat", id: uuidv4() },
  ];
  
export default function TodoList() {
    return (
        <div>

            <h1>To do list</h1>
            <ul>
                {todos.map((todo) => (
                    // here we are using the already generated id as the key.
                    <li key={todo.id}>{todo.task}</li>
                    ))}
            </ul>
        </div>
    ) 
  }