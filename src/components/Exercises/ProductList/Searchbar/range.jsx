function Range({value, onChange}){
    return(
        <div className={' priceFilter form-group my-2'}>
            <input
                type="range"
                name="priceFilter"
                id="priceFilter"
                value={value}
                step="1"
                onChange={e => {
                    onChange(e.target.value)
                }}
            />
            {value}€
        </div>
    )
}

export default Range;