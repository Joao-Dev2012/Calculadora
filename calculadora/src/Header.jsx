import './Header.css'
function Header({display}) {

    return(
    <header className='header'>
        <h1>Calculadora</h1>
        <input type="text" value={display} readOnly />
    </header>
    )
}
export default Header