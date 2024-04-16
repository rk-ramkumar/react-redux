import "./App.css";
import  { increament } from "./store";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const count = useSelector(state=> state.value);
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
