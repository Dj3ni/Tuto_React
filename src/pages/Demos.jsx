import { useState } from "react"
import DemoForm from '../components/Demos/demoForm/DemoForm.jsx'
import Parent from '../components/Demos/FluxDonnees/Parent.jsx'

function Demos() {
    const [person, SetPerson] = useState({
        firstname : "John",
        lastname: 'Doe',
        age: 32
     })
        
     const increment = ()=>{
        SetPerson({...person, age: person.age +1})
     }
     
    return(
        <div>
            <h1>Demos</h1>
            <p>Age de {person.firstname + ' ' + person.lastname} : {person.age} ans </p>
            <button onClick={increment}> + </button> 
            <DemoForm></DemoForm>
            <Parent></Parent>
        </div>
    )
}

export default Demos;