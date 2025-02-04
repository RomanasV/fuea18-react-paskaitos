import logo from '../../assets/react.svg'

import './Navigation.css'

function Navigation() {
    return (
        <nav className='main-nav'>
            <img src={logo} />

            <ul>
                <li>
                    <a href="#">Pirma</a>
                </li>
                <li>
                    <a href="#">Antra</a>
                </li>
            </ul>
        </nav>
    )
}

export default Navigation