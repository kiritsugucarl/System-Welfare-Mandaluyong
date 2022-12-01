import '../assets/styles/Navbar.css'
import { Outlet, Link } from 'react-router-dom'

function Navbar(){
    var date = new Date()
    var formattedDate = format(date, 'MMM d, yyyy H:mma')
    return(
        <>
            <nav>
                <div className="nav--time">
                    <h1>{formattedDate}</h1>
                </div>
                <div className="nav--buttons">
                    <Link to="/">Login</Link>
                    <Link to="/">Register</Link>
                </div>
            </nav>

            <Outlet/>
        </>
    )
}

export default Navbar