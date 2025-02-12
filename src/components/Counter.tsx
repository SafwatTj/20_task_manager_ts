import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../reduxRTK/storeRTK";
import { change } from "../reduxRTK/counterSlice";

const Counter = () => {
  const count = useSelector((state: RootState) => state.counter.value); // getter
  const dispatch = useDispatch(); // setter

  return (
    <div className="btn-group">
      <button
        className="btn btn-danger"
        onClick={() => dispatch(change(-10))}
      >
        -10
      </button>
      <button
        className="btn btn-warning"
        onClick={() => dispatch(change(-1))}
      >
        -1
      </button>
      <div className="px-3 fw-bold fs-4">{count}</div>
      <button
        className="btn btn-success"
        onClick={() => dispatch(change(1))}
      >
        +1
      </button>
      <button
        className="btn btn-primary"
        onClick={() => dispatch(change(10))}
      >
        +10
      </button>
    </div>
  );
};

export default Counter;
