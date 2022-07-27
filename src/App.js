import React from 'react'
import { useState } from 'react'
import api from './server/api.js'
import style from './styles/style.css'
import Button from './components/Button'
import {ErrorCep, ErrorSintax} from './components/Error'
import {BsSearch} from 'react-icons/bs'


function App(){
  var [cep, setCep] = useState(null)
  var [cepDados, setCepDados] = useState({})
  var [show, setShow] = useState(false)
  var [error1, setError1] = useState(false);
  var [error2, setError2] = useState(false);
  
    
  const input = (e) =>{
    const {value} = e.target
    setCep(value)
    setShow(false)
  }

  const verCep = async() =>{
    if(cep != null){   
      try{              
        const response = await api.get(`${cep}.json`)
        setCepDados(response.data) 
        console.log(cepDados)  

        setCep("")
        setShow(true)   
        setError1(false)
        setError2(false)
      }catch{ 
        setShow(false)
        setError1(true)
      }
    }else{
      setError2(true);
    }
  }

  return(
    <div className='app'>
      <div className='container'>
        <h1 id="tittle">Buscador de CEP</h1>
        <div className='request'>
          <input id="search" type={'text'} 
          placeholder="Digite seu CEP" onChange={input} maxLength={9}/>
          <Button onClick={verCep} id="btn" text={<BsSearch/>}></Button>
        </div>
        {error1 &&(
          <ErrorCep/>
        )}
        {error2 &&(
          <ErrorSintax/>
        )}

        {show &&(
          <div className='campos'>              
            <h3>Cidade: <span>{cepDados.city}</span></h3>
            <p>Estado: <span>{cepDados.state}</span></p>
            <p>Distrito: <span>{cepDados.district}</span></p>
            <p>Rua: <span>{cepDados.address}</span></p>
          </div> 
        )}

        <p id='author'>By Igor</p>
      </div>      
    </div>    
  )
}


export default App;
