import React, { useState, useEffect } from 'react';

import './styles.css'

import logoimage from '../../assets/logo.svg'
import { Link, useHistory } from 'react-router-dom'
import { FiPower, FiTrash2 } from 'react-icons/fi';
import api from '../../Services/api';
export default function Profile() {

    const [incidents, setincidents] = useState([])

    const ongId = localStorage.getItem('ongId');
    const ongName = localStorage.getItem('ongName');

    const history = useHistory();

    useEffect(() => {
        api.get('profile', {
            headers: {
                Authorization: ongId,
            }
        }).then(response => {
            setincidents(response.data)
        })
    }, [ongId]);

    async function handleDeleteIncent(id) {
       try 
        {
        await api.delete(`incidents/${id}`, {
            headers:{
            Authorization: ongId,
            }
        });    
        
        setincidents(incidents.filter(incident => incident.id != id));
    } catch (err)
        {
        alert('Erro ao deletar caso, tente novamente')
        }
    }

    function handleLogOut () 
    {
        localStorage.clear();
        history.push('/')
    }

    return (
        <div className="profile-container">
            <header>
                <img src={logoimage}></img>
                <span> {ongName} </span>
                <Link className="button" to="/incidents/new">
                    Cadastrar um novo caso
                </Link>
                <button onClick={handleLogOut} type="button">
                    <FiPower size={18} color="#E02041" />
                </button>
            </header>
            <h1> Casos cadastrados </h1>

            <ul>
                {incidents.map(incident => (

                    <li key={incident.id}>
                        <strong> CASO: </strong>
                        <p> {incident.title}</p>

                        <strong> Descrição: </strong>
                        <p> {incident.description} </p>

                        <strong> valor: </strong>
                        <p> {Intl.NumberFormat ('pt-br', { style: 'currency', currency : 'BRL'}).format(incident.value) } </p>

                        <button onClick={ () => handleDeleteIncent(incident.id)} type="button">
                            <FiTrash2 size={20} color="#a8a8b3" />
                        </button>
                    </li>

                ))
            }
            </ul>
        </div>
    )
}