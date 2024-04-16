import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { increament } from "./store/reducers/counter";

function App() {
  const count = useSelector(state=> state.counter.value);
  const dispatch = useDispatch();

  return (
    <>
      <div className="card">
        <button onClick={() => dispatch(increament())}>
          count is {count}
        </button>
      </div>
    </>
  );
}

export default App;
