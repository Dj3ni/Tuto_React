import { useState } from "react";
import Enfant from './Enfant.jsx'

function Parent(params) {
    const [isTermAccepted, setIsTermAccepted] = useState(false)
    return(
        <>
        <p>Flux de données</p>
         <form>
            <Enfant checked={isTermAccepted} onCheck={setIsTermAccepted}></Enfant>
            <button disabled={!isTermAccepted}>Envoyer</button>
         </form>
        
        </>
    )
}
export default Parent;