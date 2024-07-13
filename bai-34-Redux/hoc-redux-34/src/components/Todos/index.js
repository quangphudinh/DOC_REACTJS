import TodoInput from "./inputTodo";
import TodoList from "./ListTodo";
import './Todo.css'

function Todos() {
    return (
        <>
            <div className = "todo">
                <TodoInput />
                <TodoList />
            </div>

        </>
    )
}

export default Todos;