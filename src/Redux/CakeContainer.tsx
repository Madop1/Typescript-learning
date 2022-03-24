import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { buyCake } from "./cakes/cakeAction";

function CakeContainer() {
    const numOfCakes = useSelector<any>(state => state.cake.numberOfCakes)
    // console.log(numOfCakes , "CAKES")
    const dispatch = useDispatch()
    console.log(numOfCakes);
    return (
        <div>
            <h2> Cake available at store - {numOfCakes} </h2>
            <button onClick={() => dispatch(buyCake(1))}>Buy cake</button>
        </div>
    );
}

export default CakeContainer;
