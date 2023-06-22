
import React,{useState, useEffect} from "react";

const Basics1 = () => {
    let [gold, setGold] = useState(0);
    let [silver, setSilver] = useState(0);
    let [bronze, setBronze] = useState(0);

    useEffect(()=>{
        document.title = `Gold: ${gold}, Silver: ${silver} Bronze: ${bronze}`
        console.log("useEffect")
    },[gold,silver])



    
   
    return(
        <div>
            <h3>Gold:{gold}, Silver:{silver}, Bronze: {bronze} </h3>
            <button onClick={() => setGold(gold + 1)}>Gold</button>
            <button onClick={() => setSilver(silver + 1)}>Silver</button>
            <button onClick={() => setBronze(bronze + 1)}>Bronze</button>
        
                
        </div>
    )
}

export default Basics1