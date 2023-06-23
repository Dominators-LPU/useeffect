import React,{useState, useEffect} from "react";


const LiveSum = () => {
    let [num, setNum] = useState(0);
    let [sum, setSum] = useState(0);

    useEffect(()=>{
         setSum(sum+ Number(num))
    },[num])

    return(
        <div>
             <input type="number"  onChange={e=>setNum(e.target.value)}/>
                <h1>{sum}</h1>
        </div>
    )
}

export default LiveSum;