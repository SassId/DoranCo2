import { useState } from "react";

export default function Counter() {
    const [counter, setCounter] = useState(0); // put the initial value in the useState argument

    function decrement() {
        setCounter(counter - 1);
    }

    function increment(){
        setCounter(counter + 1) // put the changed value in the setCounter
    }

    return (
        <div>
            <h2>{counter}</h2>
            <button onClick={()=> decrement()}>-1</button>
            <button onClick={()=> increment()}>+1</button>
        </div>
    )
}



