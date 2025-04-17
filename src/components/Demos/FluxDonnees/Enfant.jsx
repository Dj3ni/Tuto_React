function Enfant({checked, onCheck}) {
    return(
        
        <div>
            <input type="checkbox"
                    id= "CGU" 
                    onChange={(e)=> onCheck(e.target.checked)}
                    checked = {checked}
            />
            <label htmlFor="CGU">Accept CGU</label>
        </div>
    )
}

export default Enfant;