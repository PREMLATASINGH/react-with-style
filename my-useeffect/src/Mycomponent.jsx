import { useEffect, useState } from "react";

function Mycomponent(){
    const [count , setCount]=useState(0)
    const[color,setColor]=useState("green")
    useEffect(()=>{
        document.title=`Count:${count} ${color}`;
    },[count,color]);
    function addCount(){
        setCount(c=>c+1)


    }
    function sub(){
        setCount(c=>c-1)
    }
    function changeColor(){
        setColor(c => c === "green" ? "red" : "green");
    }
    return(<>
    <p style={{color:color}}>count:{count}</p>
    <button onClick={addCount}>Add</button>
    <button onClick={sub}>sub</button>
    <button onClick={changeColor}>Changecolor</button>
    </>);
}
export default Mycomponent;