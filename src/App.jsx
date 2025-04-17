import { useState } from "react";
import DemoForm from './components/demoForm/DemoForm.jsx'

function App() {


 const [person, SetPerson] = useState({
    firstname : "John",
    lastname: 'Doe',
    age: 32
 })


 const increment = ()=>{
    SetPerson({...person, age: person.age +1})
 }

  return (
    <>
         <p>Age de {person.firstname + ' ' + person.lastname} : {person.age} ans </p>
         <button onClick={increment}> + </button> 
         <DemoForm></DemoForm>
    </>
  )
}

export default App
