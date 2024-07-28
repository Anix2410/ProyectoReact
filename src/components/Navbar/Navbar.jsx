import "./Navbar.css"
import CartWidget from "../CartWidget/CartWidget"

const Navbar = ()=> {
    return (
        
        <nav className="navbar">
            <div className="navbar-logo">
                <p>The Cap Store Argentina</p>
            </div>
            <div className="navbar-links">
                <ul>
                <li>
                        <a href="#">Inicio</a>
                    </li>
                    <li>
                        <a href="#">Caps Rocky</a>
                    </li>
                    <li>
                        <a href="#">Caps Los Simpsons</a>
                    </li>
                    <li>
                        <a href="#">Contacto</a>
                    </li>
                </ul>
            </div>
            
            <CartWidget/>
          </nav>
        
    )
}

export default Navbar
