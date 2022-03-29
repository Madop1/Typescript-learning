import {  useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { buyIceCream } from "./IceCreams/iceCreamAction";

function NewIceCreamContainer() {
  const [number, setNumber] = useState(1);
  const numberOfIceCream = useSelector<any>((state) => state.iceCream.numberOfIceCream);
//   console.log(numberOfIceCream);
  const dispatch = useDispatch();
//   if (numberOfIceCream < 0) {
//     return false;
//   }
  return (
    <div className="app2">
      <h2> 🍦 available at store - {numberOfIceCream} </h2>
      <input
        type="number"
        value={number}
        placeholder="Enter values in numbers"
        onChange={(e:any) => setNumber(e.target.value)}
      />
      <button onClick={() => dispatch(buyIceCream(number))}>
        Buy IceCream
      </button>
    </div>
  );
}

export default NewIceCreamContainer;
