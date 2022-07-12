import { useState, useEffect } from "react";

const Counter = () => {
    const [value, setValue] = useState(0);
    useEffect(() => {
        console.log("effect", value);
        return () => {
            console.log("clean", value);
        };
    }, [value]);
    return (
        <div>
            <p>current counter is {value}</p>
            <button onClick={() => setValue(value + 1)}> +1</button>
            <button onClick={() => setValue(value - 1)}> -1</button>
        </div>
    );
};

export default Counter;
