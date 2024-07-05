import { Component } from 'react';
import './Header.css'

class Header extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <>
            <section className="header">
               <img src="./img/header.png" alt="Si sale solo Org es porque hay problemas para la imag"/>
            </section>
            </>
        );
    }    
}

/* const Header = () => {
    return <section className="header">
    <img src="src/img/header.png" alt="Org"/>
    </section>
} */

export default Header
