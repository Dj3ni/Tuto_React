import { useState } from "react"
import DemoForm from '../components/Demos/demoForm/DemoForm.jsx'
import Parent from '../components/Demos/FluxDonnees/Parent.jsx'
import Checkbox from '../components/Exercises/ProductList/Searchbar/checkbox.jsx'
import EditTitle from "../components/Demos/useEffect/useEffectComponent.jsx"

function Demos() {
    const [person, SetPerson] = useState({
        firstname : "John",
        lastname: 'Doe',
        age: 32
     })

     const [showInput,setShowInput] = useState(false)
        
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
            
            <Checkbox
                checked={showInput}
                onChange={setShowInput}
                id='titleShow'
                label='Afficher le champ titre'
            />
            {showInput && <EditTitle/>}
            <div style={{height:'300vh'}}></div>
        </div>
    )
}

export default Demos;