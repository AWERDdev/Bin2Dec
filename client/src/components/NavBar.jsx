import "../styles/navbar.css"
import {Link} from "react-router-dom"
function NavBar(){
    return(
        <>
        <nav className="navbar">
<div className="title"><h1>AWERDdev</h1></div>
<div className="links">
    <Link to="https://github.com/AWERDdev?tab=repositories">Github repo</Link>
</div>
</nav>
        </>
    )
}
export default NavBar
