import { useDispatch } from 'react-redux';
import { createTodo } from '../../actions/todo';
import { useRef } from 'react';
function TodoInput(){
    const dispatch = useDispatch();
    const inputRef = useRef(); 

    const handleSubmit = (e) => {
        e.preventDefault(); //k bi load lai trang sau khi submit
        if(e.target.elements.content.value !== ""){
            console.log(e.target.elements.content.value);
            dispatch(createTodo(e.target.elements.content.value));
            inputRef.current.value = '';
            inputRef.current.focus();
        }
        // console.log(e.target[0].value);
    }
    return(
        <>
            <div className = "todo__input">
                <form onSubmit={handleSubmit}>
                    <input ref={inputRef} name="content"/>
                    <button type="submit">+</button>
                </form>
            </div>
            
        </>
    )
}

export default TodoInput;