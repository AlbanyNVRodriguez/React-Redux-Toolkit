import { useDispatch, useSelector} from "react-redux";
import { decrement, increment, reset } from "../store/slices/counter/counterSlice";

const CounterApp = () => {
    let { counter } = useSelector(state => state.counter);
    let dispatch = useDispatch();

    return (
        <div>
            <h2>{ counter }</h2>
            <button style={{ margin: "0 2px" }} onClick={() => dispatch(increment())}>+</button>
            <button style={{ margin: "0 2px" }} onClick={() => dispatch(decrement())}>-</button>
            <button style={{ margin: "0 2px" }} onClick={() => dispatch(reset())}>reset</button>
        </div>
    )
}

export { CounterApp };