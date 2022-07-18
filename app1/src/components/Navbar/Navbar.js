import './Navbar.css'

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
        </nav>
    )
}
export default Navbar