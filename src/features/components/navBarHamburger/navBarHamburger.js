import './navBarHamburger.css';
import toggleModal from '../subReddit/subReddit';

const NavBarHamburger = () => {

    return (
        <div className='hamburger' onClick={toggleModal}>
            <div className='hamburger-line-1'></div>
            <div className='hamburger-line-2'></div>
            <div className='hamburger-line-3'></div>
        </div>
    )
}

export default NavBarHamburger