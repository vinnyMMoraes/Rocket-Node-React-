import React, {useState} from 'react'

import './styles.css'

import {Link , useHistory } from 'react-router-dom';
import {FiArrowLeft} from 'react-icons/fi';
import api from '../../Services/api';

import logoimage from '../../assets/logo.svg'

export default function Register(){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [whatsapp, setWhatsApp] = useState('');
    const [city, setCity] = useState('');
    const [uf, setuf] = useState('');

    const history = useHistory();

async function handleResgister(e){
    e.preventDefault();

const data ={
    name,
    email,
    whatsapp,
    city,
    uf
        }
try{
       const response = await api.post('ongs',data)

    
       alert (`Seu id de acesso ${response.data.id}` )
       history.push('/')
    }
catch (err)
{
    alert ('Erro no cadastro, verifique as informações')    
}
}

return(
<div className="register-container">

   <div className="content">
    <section>
    <img src={logoimage} alt="be the hero"></img>
    <h1> Cadastro </h1>
    <p> faça o seu cadastro,entre na plataforma e ajude pessoas a encontrarem a sua ONG</p>

    <Link className="back-link" to="/"> <FiArrowLeft size={16} color="#E02041"/> 
    Não tenho cadastro
    </Link>
    </section>

    <form onSubmit={handleResgister}>
    <input placeholder="Nome da Ong" value={name} onChange={ e => setName(e.target.value)}/>

    <input type ="email" placeholder="E-mail" value={email} onChange={e => setEmail(e.target.value)}/>
    
    <input placeholder="WhatsApp" value={whatsapp} onChange={e => setWhatsApp(e.target.value)}/>
 
    <div className ="input-group">
    
    <input placeholder="Cidade" value={city} onChange={e => setCity(e.target.value)}/>
    
    <input placeholder="UF" style={{width:80 }} value={uf} onChange={e => setuf(e.target.value)} />
    </div>

    <button className="button" type="submit"> Cadastrar </button>
  
    </form>
   </div>

</div>
)
}