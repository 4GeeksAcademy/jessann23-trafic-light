import React, { useEffect, useState } from "react";

function Traficlight(props) {
    const [contador,setContador]=useState(0)
    const[color,setColor]=useState("red")
useEffect() =>{
if (contador>0) {
    setColor("red")
}else if(contador<0)
{
    setColor("yellow")

}
}
    
}
export default Trafic-light