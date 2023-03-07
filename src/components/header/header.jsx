import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { CartContext } from '../../context/cart-context'
import './header.css'

const Header=()=>{
    const {cartData}=useContext(CartContext)
    const navigate=useNavigate()
    return <>
        <nav className="navbar">
            <section className="log">
                Game Colony
            </section>
            <section className="cart-logo" onClick={()=>{navigate('/cart')}}>
                <span>{cartData.length}</span>
                <i className="fa fa-shopping-cart"></i>
            </section>
        </nav>
    </>
}
export default Header