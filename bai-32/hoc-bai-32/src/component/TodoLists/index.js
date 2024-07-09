import { useRef ,useEffect, useReducer } from 'react';

const init = [
    {
        id: 1,
        content: "T2 di hoc"
    }, 
    {
        id: 2,
        content: "T3 di choi"
    },
    {
        id: 3,
        content: "T4 di tham quan"
    }
]

const reducer = (state, action) => {
    //action  create and delete
    console.log(state ,action);
    switch (action.type) {
        case 'create':
            return [
                ...state,
                {
                    id: action.payload.id,
                    content: action.payload.content
                }
            ];
        case 'delete':
            return state.filter(todo => todo.id !== action.payload.id);
        default:
            return state;
    }
}

function Todos() {
    const [todos, dispatch] = useReducer(reducer, init);
    const inputRef = useRef(); //lưu đối tượng k thay đổi khi render component

    useEffect(() => {
        inputRef.current.focus();
    },[]);
    console.log(todos);

    const handleSubmit = (e) =>{
        e.preventDefault();
        const value = e.target.inputTodos.value;
        if(value){
            dispatch({
                type: 'create',
                payload: {
                    id: Date.now(),
                    content: value
                }
            })
            inputRef.current.value = ''; // sau khi submit thi reset lai input
        }
        // console.log();
    }

    const handleDelete = (id) => {
        // console.log(id);
        dispatch({
            type: 'delete',
            payload: {
                id : id
            }
        })
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input ref={inputRef} name='inputTodos' />
                <button>Add</button>
            </form>

            {todos.length > 0 && (
                <ul>
                    {todos.map((todo) => (
                        <li key={todo.id}>
                            {todo.content}
                            <button onClick={() => handleDelete(todo.id)}>Delete</button>
                        </li>
                    ))}
                </ul>
            )}
        </>
    )
}

export default Todos;