import placeholder from '../assets/logo-placeholder-image.png'
import '../assets/styles/Header.css'

function Header(){
    return(
        <header>
            <div className="logo">
                <img className="logo--image" src={placeholder}/>
                <div className="logo--text">
                    <p>Lungsod ng Mandaluyong</p>
                    <span><hr/></span>
                    <p>Social Welfare System</p>
                </div>
            </div>
        </header>
    )
}

export default Header