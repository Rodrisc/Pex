import '../styles/dashboard.css'
import '../styles/dashboard/section.css'

import wallBlack from '../images/wallBlack.svg'
import owner from '../images/owner.svg'
import bell from '../images/bell.svg'
import vector from '../images/vector.svg'
import SearchIcon from '../images/SearchIcon.svg'
import moon from '../images/moon.svg'
import dollarRed from '../images/dollarRed.svg'
import dollarBlue from '../images/dollarBlue.svg'
import dollarGreen from '../images/dollarGreen.svg'

function Dashboard() {
    return (
        <div className='containerMain'>
            <div className='containerHead'>

                <p>Principal / Dashboard</p>

                <div className='containerInputSearch'>
                    <span>Pex Dashboard</span>
                    <div>
                        <div className='inputDate, inputSearch'>
                            <div>
                                <img src={SearchIcon} alt='searchIcon'></img>
                                <input type='text' placeholder='Buscar'></input>
                            </div>
                            <img src={bell} alt='bell'></img>
                            <img src={moon} alt='moon'></img>
                            <img src={vector} alt='exclamation'></img>
                            <img src={owner} alt='owner' className='owner'></img>
                        </div>

                    </div>

                </div>

                <div className='containerDate'>
                    <div className='date'>

                        <p>Filtrar por data</p>

                        <div className='inputDate'>
                            <img src={wallBlack} alt='wallBlack'></img>
                            <input type='text' placeholder='Data inicial'></input>
                        </div>

                        <div className='inputDate'>
                            <img src={wallBlack} alt='wallBlack' ></img>
                            <input type='text' placeholder='Data final'></input>
                        </div>
                    </div>
                </div>
            </div>

            <section className='containerSection'>
                <div className='balance balanceRed'>
                    <div className='icon'><img className='image' src={dollarRed}></img></div>
                    <p className='text totalValueRed'>R$ 312.321,00</p>
                    <span className='textProfit'>Receita total</span>
                    <hr></hr>
                    <p className='text profitValue'>R$ 67,20</p>
                    <span className='averageClient'>Média por cliente</span>
                </div>
                <div className='balance balanceBlue'>
                    <div className='icon'><img className='image' src={dollarBlue}></img></div>
                    <p className='text totalValueBlue'>R$ 74.421,00</p>
                    <span className='textProfit'>Lucro total</span>
                    <hr></hr>
                    <p className='text profitValue'>R$ 42,30</p>
                    <span className='averageClient'>Média por cliente</span>
                </div>
                <div className='balance balanceGreen'>
                    <div className='icon'><img className='image' src={dollarGreen}></img></div>
                    <p className='text totalValueGreen'>R$ 3,12</p>
                    <span className='textProfit'>Lucro por venda</span>
                    <hr></hr>
                    <p className='text profitValue'>R$ 12,40</p>
                    <span className='averageClient'>Média por cliente</span>
                </div>

            </section>

        </div>

    )
}

export default Dashboard