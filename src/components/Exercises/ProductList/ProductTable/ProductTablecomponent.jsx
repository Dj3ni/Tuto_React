import ProductCategoryRow from "./ProductCategoryRow"
import ProductRow from "./ProductRow"

function ProductTableComponent({products}) {


    const rows = []
    let lastCategory = null;

    products.forEach((product)=>{
        if(product.category !== lastCategory){
            rows.push(
            <ProductCategoryRow key={product.category}category={product.category}/>)
            lastCategory= product.category          
        }
        rows.push(
            <ProductRow product={product} key={product.name}/>
        )
    })

    return (
        
        <table className="table">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
                {rows}                    
            </tbody>
            
        </table>
    )
}


export default ProductTableComponent