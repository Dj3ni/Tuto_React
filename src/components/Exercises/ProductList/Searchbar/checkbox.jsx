/**
 * @param {bool} checked,
 * @param {string} label,
 * @param {(s:string)=>void} onChange
 */
function Checkbox({checked, onChange, label,id}) {
    return(
        <div className="form-check">
            <input 
                type="checkbox" 
                id ={id}
                className="form-check-input"
                checked={checked}
                onChange={(e)=>onChange(e.target.checked)}
            />
            <label 
                htmlFor= {id}
                className="form-check-label"                
            >{label}</label>
        </div>
    )
}

export default Checkbox