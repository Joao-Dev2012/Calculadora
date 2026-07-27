import { useState } from 'react'
import Header from './Header.jsx'
import './App.css'
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import { FaDivide } from "react-icons/fa";

function App() {
  const [display, setDisplay] = useState('')
  const [primeiroNumero, setPrimeiroNumero] = useState(null)
  const [operador, setOperador] = useState(null)

  function adicionarNumero(num){
    setDisplay((anterior)=> anterior + num)
  }
  function escolherOperador(op){
    if( display === '' )return
    setPrimeiroNumero(Number(display))
    setOperador(op)
    setDisplay('')
  }
  function calcular(){
    if (display === '' || primeiroNumero === null || operador === null) return

    const segundoNumero = Number(display)
    let resultado = 0

    if (operador === '+'){
      resultado = primeiroNumero + segundoNumero
    }
    else if (operador === '-'){
      resultado = primeiroNumero - segundoNumero
    }
    else if(operador === 'x'){
      resultado = primeiroNumero * segundoNumero
    }
    else if(operador === '/'){
      resultado = primeiroNumero / segundoNumero
    }
    setDisplay(String(resultado))
    setOperador(null)
    setPrimeiroNumero(null)
  }
  function limpar(){
    setDisplay('')
    setOperador(null)
    setPrimeiroNumero(null)
    console.log("tudo removido")
    alert("tudo removido")
  }
  function del(){
    setDisplay(display.slice(0,-1))
  }
  function virgula(vrg){
    if(display.includes('.')) return

    if(display !==''){setDisplay((anterior)=> anterior + vrg)}
    else{setDisplay((anterior)=> anterior + '0.')}
  }

  return (
    <>    
    <Header className='header' display={display}/>

    <div className='botoes'>
      <button onClick={() => adicionarNumero('1')}>1</button>
      <button onClick={() => adicionarNumero('2')}>2</button>
      <button onClick={() => adicionarNumero('3')}>3</button>
      <button onClick={() => escolherOperador('+')}><FaPlus/></button>



      <button onClick={() => adicionarNumero('4')}>4</button>
      <button onClick={() => adicionarNumero('5')}>5</button>
      <button onClick={() => adicionarNumero('6')}>6</button>



      <button onClick={() => escolherOperador('-')}><FaMinus/></button>
      <button onClick={() => adicionarNumero('7')}>7</button>
      <button onClick={() => adicionarNumero('8')}>8</button>
      <button onClick={() => adicionarNumero('9')}>9</button>



      <button onClick={() => escolherOperador('x')}><FaTimes/></button>
      <button onClick={limpar} >🗑️</button>
      <button onClick={() => adicionarNumero('0')}>0</button>
      <button onClick={del}>⌫</button>
      <button onClick={() => escolherOperador('/') }><FaDivide/></button>
      <br />
      <button className='virgula' onClick={() => virgula('.')}>.</button>
      <br />
      <button className='calcular' onClick={calcular} >=</button>
    </div>
</>

  )
}
export default App