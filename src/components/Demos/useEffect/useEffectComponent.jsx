import { useEffect, useState } from "react";
import Input from '../../Exercises/ProductList/Searchbar/input.jsx'

function EditTitle(){
    const [title, setTitle] = useState('')
    const [firstname, setFirstname] = useState('')

    useEffect(()=>{
        const originalTitle = document.title;
        return ()=>{
            document.title = originalTitle;
        }
    },[title])

    useEffect(()=>{
        document.title = title
    },[title])

    

    return(
        <div className="vstack gap-2">
            <Input
                placeholder = "Modifier le titre"
                value ={title}
                onChange={setTitle}
            />
            <Input
                placeholder = "Prénom"
                value ={firstname}
                onChange={setFirstname}
            />

        </div>

    )
}

export default EditTitle;