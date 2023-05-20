import React, { useEffect, useState } from 'react';
import SearchClients from '../components/SearchClients';
import AddProductoToOrder from '../components/AddProductoToOrder';
import Orders from '../components/Orders';
import { useDispatch, useSelector } from 'react-redux';
import { setGenOrder } from '../store/slices/genOrder.slice';
import { Link } from 'react-router-dom';

const NewOrder = () => {

    const currentDate = new Date().toISOString().split('T')[0];
    const [selectedDate, setSelectedDate] = useState('');

    const genOrder = useSelector(state => state.genOrder);
    const dispatch = useDispatch();

    const handleDateChange = (event) => {
        const newSelectedDate = event.target.value;

        if (newSelectedDate > currentDate) {
            alert('La fecha seleccionada no puede ser mayor a la fecha actual');
        } else {
            setSelectedDate(newSelectedDate);
            dispatch(setGenOrder({...genOrder, date: newSelectedDate}));
        }
    };

    return (
        <div className='content-orders'>
            <div className='item-a'>
                <div className='content-clients-date'>
                    <Link to='/dashboard'>volver</Link>
                    <SearchClients/>
                    <label htmlFor="date">Agregar fecha</label>
                    <input id='date' type="date" value={selectedDate} max={currentDate} onChange={handleDateChange} />
                </div>
                <AddProductoToOrder/>
            </div>
            <div className='item-b'>
                <Orders/>
            </div>
        </div>
    );
};

export default NewOrder;