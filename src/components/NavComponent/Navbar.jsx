import {Link} from "react-router-dom";

function Navbar(params) {
    const list = [
        {
            title: "Home",
            link:"/"
        },
        {
            title: "Demos",
            link: "/demos",
        },
        {
            title: "Exercises",
            link:"Exe",
        }
    ]

    const listItems = list.map((item,index)=>{
            return(
                <li key={index}>
                    <Link to={item.link}>{item.title}</Link>
                </li>
            )
    })

    return(
        <>
            <nav>
                <ul>
                    {listItems}
                </ul>
            </nav>

        </>
    )
    
}

export default Navbar;