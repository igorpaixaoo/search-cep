import React from 'react'
import { useState } from 'react'
import api from './server/api.js'
import style from './style.css'
import Button from './Button.js'


function App(){
  var [cep, setCep] = useState(null)
  var [cepDados, setCepDados] = useState({})
    
  const input = (e) =>{
    const {value} = e.target
    setCep(value)
  }

  const verCep = async() =>{
    if(cep != null){   
      try{                 
        const response = await api.get(`${cep}.json`)
        setCepDados(response.data)
        console.log(cepDados)  
        setCep("")
      }catch{ 
        alert("Error 404")
      }
    }else alert("Digite algo")
  }

  return(
    <div className='app'>
      <div className='container'>
        <h1 id="tittle">Buscador de CEP</h1>
        <input id="search" type={'text'} 
        placeholder="Digite seu CEP" onChange={input} maxLength={9}/>
        <Button onClick={verCep} id="btn" text="Procurar"></Button>
        <div className='campos'>              
          <h3>Cidade: <span>{cepDados.city}</span></h3>
          <p>Estado: <span>{cepDados.state}</span></p>
          <p>Distrito: <span>{cepDados.district}</span></p>
          <p>Rua: <span>{cepDados.address}</span></p>
        </div> 
        <p id='author'>By Igor</p>
      </div>      
    </div>    
  )
}


export default App;
