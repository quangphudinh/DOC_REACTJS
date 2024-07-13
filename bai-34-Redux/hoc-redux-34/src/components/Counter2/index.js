import { useSelector , useDispatch} from 'react-redux';
import { down, reset, up } from '../../actions/counter';
function Counter2() {
    const counter2 = useSelector(state => state.counterReducer);
    const dispatch = useDispatch();
    return(
        <>
            <p>Do cung luu cung 1 store</p>
            <p>su dung Redux de lay du lieu trong store cua Counter de truyen vao cho Counter2</p>
            <h2>Counter2 : {counter2}</h2>
            <button onClick={() => dispatch(up(3))}>UP 3</button>
            <button onClick={() => dispatch(down(5))}>DOWN 5</button>
            <button onClick={() => dispatch(reset())}>RESET</button>
        </>
    )
}

export default Counter2;