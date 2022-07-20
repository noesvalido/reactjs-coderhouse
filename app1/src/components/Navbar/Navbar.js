import './Navbar.css'
import CartWidget from '../CartWidget/CartWidget'

const Navbar = () => {
    return  (
        <nav className='Navbar'>
            <div>
                Ecomerce
            </div>
            <div className='Menu'>
                <button>Celulares</button>
                <button>Tablet</button>
                <button>Notebook</button>
            </div>
             <CartWidget/>
        </nav>
    )
}
export default Navbar