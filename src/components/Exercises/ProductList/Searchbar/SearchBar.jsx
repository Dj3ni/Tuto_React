import Input from './input.jsx'
import Checkbox from './checkbox.jsx'
import Range from './range.jsx'

function Searchbar({
    onStockedOnlyChanged,
    showStockedOnly,
    search,
    onSearchChange, 
    range,
    onRangeChange
}) {

    return(
        <>
            <div className='mb-3'>
                <Input
                    value={search}
                    onChange={onSearchChange}
                    placeholder='Search...'
                />
                <Checkbox
                    id="stocked"
                    label={"Display only stocked items"}
                    checked={showStockedOnly}
                    onChange={onStockedOnlyChanged}
                />
                <Range value={range} onChange={onRangeChange}/>
            </div>
        </>
    )
}

export default Searchbar