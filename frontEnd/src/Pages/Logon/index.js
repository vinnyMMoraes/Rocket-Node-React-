import React, {useState} from 'react';
import './styles.css';

import { Link, useHistory } from 'react-router-dom'
import { FiLogIn } from 'react-icons/fi';
import api from '../../Services/api';
import heroesImg from '../../assets/heroes.png'
import logoimage from '../../assets/logo.svg'

export default function Logon() {
const [id, setid] =useState('');
const history = useHistory();

async function handleLogin (e)
{
e.preventDefault();

try 
{
const response = await api.post('Session', {id}) ;  
localStorage.setItem('ongId',id);
localStorage.setItem('ongName', response.data.name);
history.push('/profile')

}
catch (err)
{
    alert ('Erro no login, verifique as informações')  
}
}

    return (
        <div className="logon-container">
            <section className="form">
                <img src={logoimage} alt="be the hero"></img>
                <form onSubmit={handleLogin}>
                    <h1> Faça seu logon </h1>
                    <input placeholder="sua Id" value ={id} onChange={e => setid(e.target.value)}/>
                    <button type='submit' className="button"> Login </button>
                    <Link className="back-link" to="/register"> <FiLogIn size={16} color="#E02041" />
                    Não tenho cadastro/>
                    </Link>
                </form>
            </section>
            <img src={heroesImg} alt="heroes" ></img>
        </div>
    )
}
