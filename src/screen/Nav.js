import house from '../images/house.svg'
import cart from '../images/cart.svg'
import graphic from '../images/graphic.svg'
import wall from '../images/wall.svg'
import user from '../images/user.svg'

// import slogan from '../images/slogan.png'
// import pex1 from '../images/pex1.svg'
// import pex2 from '../images/pex2.svg'
// import pex3 from '../images/pex3.svg'
// import pex4 from '../images/pex4.svg'

import logo from '../images/logo.png'

import '../styles/nav.css'

function Nav() {
    return (
        <div className='containerNav'>
            <div className='containerLogo'>
                <img src={logo} alt='logo' className='logo'/>
            </div>
                
            <nav className='containerLinks'>
                <a href="#" className='link'><img src={house} alt='house'  /><span>Dashboard</span> <div className='box'></div></a>
                <a href="#"><img src={cart} alt='cart' />Vendas</a>
                <a href="#"><img src={graphic} alt='graphic' />Relatórios</a>
                <a href="#"><img src={wall} alt='wall' />Lojas parceiras</a>
                <a href="#"><img src={user} alt='user' />Clientes</a>
            </nav>
        </div>
    )
}

export default Nav