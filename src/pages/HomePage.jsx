import {Link} from 'react-router-dom'

function HomePage(params) {
    return(
        <>
            <h1>Tuto React with Grafikart!</h1>
            <Link to="https://grafikart.fr/formations/react" target='_blank'>All the tutorial</Link>
        </>
    )
}

export default HomePage