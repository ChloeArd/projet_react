import './Header.css';
import logo from '../../assets/images/logo.png';

export const Header = function () {
    return (
        <div className="Header">
            <img src={logo} alt="Shop logo" />
        </div >
    )
}