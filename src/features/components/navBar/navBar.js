import './navBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SearchBar from '../searchBar/searchBar';
import NavBarSandwitch from '../navBarHamburger/navBarHamburger';

const NavBar = () => {
    return (
        <header>
            <div className='navBar'>
                <NavBarSandwitch />
                <div className='navBarLeft'>
                    <FontAwesomeIcon icon="fa-brands fa-square-reddit" />
                    <p className='navBarTitle'>tiMeddit</p>
                </div>
                <SearchBar />
            </div>
        </header>
    )
}

export default NavBar