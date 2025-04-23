import { useState, useEffect } from "react";
import Input from "../ProductList/Searchbar/input";


function CountDown() {
    const [startCount, setStartCount] = useState(5)
    const [timeLeft, setTimeLeft] = useState(startCount)

    const handleChange =(v)=>{
        setStartCount(v)
        setTimeLeft(v)
    }


    useEffect(() => {
      const timer = setInterval(() => {
        setTimeLeft(v=> {
            if(v <= 1){
                clearInterval(timer)
                return 0
            } return  v -1})
      }, 1000);
    
      return () => {
        clearInterval(timer)
      }
    }, [startCount])
    

    return ( 
        <div className="vstack gap-2">

            <Input
                value={startCount}
                onChange={handleChange}
                placeholder = 'Timer'
            />
            <p>Décompte: {timeLeft}</p>

        </div>
     );
}

export default CountDown;