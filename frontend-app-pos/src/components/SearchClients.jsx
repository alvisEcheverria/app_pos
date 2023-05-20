import axios from 'axios';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setGenOrder } from '../store/slices/genOrder.slice';

const SearchClients = () => {

    const [searchTerm, setSearchTerm] = useState('');
    const [ clients, setClients ] = useState([]);

    const genOrder = useSelector(state => state.genOrder);
    const dispatch = useDispatch();

    const handleSearch = async (event) => {
        try {
            event.preventDefault();
            const response = await axios.get(`http://localhost:8000/api/v1/clients`);
            const filteredClients = response.data.filter((client) =>
                client.clientName.toLowerCase().includes(searchTerm.toLowerCase()) || client.identification.toLowerCase().includes(searchTerm.toLowerCase())
            );
            setClients(filteredClients);
        } 
        catch (error) {
            console.error(error.response);
        }
      };

    const handleChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const insertClientInOrder = (clientId) => {
        dispatch(setGenOrder({...genOrder, clientId}));
        alert('Cliente añadido a la orden con éxito');
    }

    return (
        <div>
            <form onSubmit={handleSearch}>
                <label htmlFor="client">Buscar cliente</label>
                <input id='client' type="text" value={searchTerm}  onChange={handleChange} placeholder='Buscar cliente por nombre o cédula'/>
                <button type='submit'>buscar</button>
            </form>
            <table className='content-table'>
                <thead>
                    <tr className='titles-row'>
                        <th>Nombre</th>
                        <th>Cédula</th>
                        <th>Dirección</th>
                        <th>Teléfono</th>
                        <th>Correo</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        clients.map( client => (
                            <tr className='titles-row-client-data' key={client.clientId}>
                                <td>{client.clientName}</td>
                                <td>{client.identification}</td>
                                <td>{client.direction}</td>
                                <td>{client.phone}</td>
                                <td>{client.email}</td>
                                <td><button className='button-add-client' onClick={()=> insertClientInOrder(client.clientId)}>add</button></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
};

export default SearchClients;