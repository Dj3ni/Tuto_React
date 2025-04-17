import {useState} from "react";

function DemoForm() {
    const [firstname, setFirstname] = useState('John Doe')

    // formualire contrôlé (par React)
    const handleChange = (e)=>{
        setFirstname(e.target.value)
        console.log('render')
    }

    // Formulaire non contrôlé
    const handleSubmit = (e)=>{
        e.preventDefault()
        console.log(new FormData(e.target));
        console.log('render2')
    }

  return (
    <>
    <p>Coucou je suis le formulaire</p>
        {/* Formulaire contrôlé */}
      <form>
        <input type="text" name ="firstname" value ={firstname} onChange={handleChange}/>
        {firstname}
      </form>

        {/* Formulaire non contrôlé */}
        <form onSubmit={handleSubmit}>
            <input type="text" name="firstname" defaultValue="votre prénom" />
            <button>Envoyer</button>
        </form>
    </>
  )
}

export default DemoForm;
