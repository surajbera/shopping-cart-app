import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import '../styles/navbar.scss'

const Navbar = () => {
  const { cartProductIds } = useSelector((state) => state.cart)

  return (
    <nav className='navbar'>
      <div className='container'>
        <div className='logo'>
          <NavLink to='/' end>
            <i className='bi bi-shop-window' />
          </NavLink>
        </div>

        <div className='spacer'></div>

        <div className='products-wrap'>
          <NavLink
            to='/'
            className={({ isActive }) => (isActive ? 'selected' : '')}
            title='products'
            end
          >
            <i className='bi bi-grid' />
          </NavLink>
        </div>

        <div className='cart-wrapper'>
          <NavLink
            to='/cart'
            title='cart'
            className={({ isActive }) => `${isActive && 'selected'}`}
          >
            <i className='bi bi-cart3' />
            <sup className='cart-number'>{cartProductIds.length}</sup>
          </NavLink>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
