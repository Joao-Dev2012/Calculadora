import { useState } from 'react'
import Header from './Header.jsx'
import './App.css'
import { FaPlus, FaMinus, FaTimes, FaDivide } from "react-icons/fa";

function App() {
  const [display, setDisplay] = useState('')
  const [resultado, setResultado] = useState(null)
  const [operador, setOperador] = useState(null)

  function adicionarNumero(num){
    setDisplay((anterior) => anterior + num)
  }

  function fazerConta(a, b, op){
    if(op === '+') return a + b
    if(op === '-') return a - b
    if(op === 'x') return a * b
    if(op === '/') return a / b
  }

  function escolherOperador(op){
    if(display === '') return

    const numero = Number(display)

    // Primeira operação
    if(resultado === null){
      setResultado(numero)
    }
    // Já existe um resultado
    else{
      const novoResultado = fazerConta(resultado, numero, operador)
      setResultado(novoResultado)
    }

    setOperador(op)
    setDisplay('')
  }

  function calcular(){
    if(display === '' || resultado === null || operador === null) return

    const numero = Number(display)

    const novoResultado = fazerConta(resultado, numero, operador)

    setResultado(novoResultado)
    setDisplay(String(novoResultado))
    setOperador(null)
  }

  function limpar(){
    setDisplay('')
    setResultado(null)
    setOperador(null)
  }

  function del(){
    setDisplay(display.slice(0,-1))
  }

  function virgula(){
    if(display.includes('.')) return

    if(display !== ''){
      setDisplay((anterior)=> anterior + '.')
    }else{
      setDisplay('0.')
    }
  }

  return (
    <>
      <Header display={display}/>

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

        <button onClick={limpar}>🗑️</button>
        <button onClick={() => adicionarNumero('0')}>0</button>
        <button onClick={del}>⌫</button>
        <button onClick={() => escolherOperador('/')}><FaDivide/></button>

        <button className='virgula' onClick={virgula}>.</button>
        <button className='calcular' onClick={calcular}>=</button>
      </div>
    </>
  )
}

export default App