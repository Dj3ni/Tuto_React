import {useState} from 'react'
import ProductTableComponent from "./ProductTable/ProductTablecomponent";
import Searchbar from "./Searchbar/SearchBar";

const Products = [
    { name: "Apple", price: 2, category: "Fruit", stocked:true },
    { name: "Kiwi", price: 3, category: "Fruit", stocked:true },
    { name: "Dragonfruit", price: 10, category: "Fruit",stocked:false },
    { name: "Mushroom", price: 1, category: "Vegetable",stocked:false },
    { name: "Salad", price: 5, category: "Vegetable",stocked:true },
    { name: "Spinach", price: 7, category: "Vegetable",stocked:true },
    { name: "Rice", price: 20, category: "Condiment" ,stocked:true},
];



function ProductListComponent() {

    const [showStockedOnly, setShowStockedOnly] = useState(false)
    const [search, setSearch] = useState('Search...')
    const [range, setRange] = useState(10)

    const visibleProducts = Products.filter(p=>{
        if(showStockedOnly && !p.stocked) return false
        if(search && !p.name.toLowerCase().includes(search)) return false
        if(range && p.price > range) return false

        return true
    })
    

    return(
        <div className="container my-3">
            <Searchbar 
                showStockedOnly={showStockedOnly} onStockedOnlyChanged={setShowStockedOnly}
                onSearchChange={setSearch}
                search={search}
                range={range}
                onRangeChange={setRange}
            />
            <ProductTableComponent products={visibleProducts}/>
        </div>
    )
}

export default ProductListComponent;

