import React from "react"
// import Insert from "./logika";


const Calculator = ()=>{

   
    return(
        
        <div className="main">
            <div className="item input"> <form name="form"> <input type="text" name ="textView" readOnly></input></form></div>
            <div className="item clean">C</div>
            <div className="item back">__</div>
            <div className="item" onClick='Insert("+")'>+</div>
            <div className="item"onClick='Insert("-")'>-</div>
            <div className="item" onClick='Insert("*")'>X</div>
            <div className="item"onClick="Insert('/')">/</div>
            <div className="item">7</div>
            <div className="item">8</div>
            <div className="item">9</div>
            <div className="item">(</div>
            <div className="item">4</div>
            <div className="item">5</div>
            <div className="item">6</div>
            <div className="item">)</div>
            <div className="item">1</div>
            <div className="item">2</div>
            <div className="item">3</div>
            <div className="item equal">=</div>
            <div className="item zero">0</div>
            <div className="item">.</div>

        </div>
        
    )
}

export default Calculator;