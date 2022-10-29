import React, {useState} from "react";


const Trafficlight = () => {

  const [ color, setColor] = useState("red");

  return (
    <div className='traffic-light'>
        <div className={'light red '+ (color == "red"? "on" : "")} onClick={()=>{setColor("red")}}></div>
        <div className={'light yellow '+ (color == "yellow"? "on" : "")} onClick={()=>{setColor("yellow")}}></div>
        <div className={'light green '+ (color == "green"? "on" : "")} onClick={()=>{setColor("green")}}></div>
    </div>
  )
}

export default Trafficlight;