import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';

const RegisterClient = () => {

    const { register, handleSubmit, reset } = useForm();
    const navigate = useNavigate();

    const submit = data => {
        axios.post('http://localhost:8000/api/v1/clients', data)
            .then(res => alert('Cliente creado satisfactoriamente'))
            .catch(error => {
                    alert(error.response.data.message)
                    console.log(error.response)
            
                    })
        navigate('/dashboard')
    }

    return (
        <>
            <Link to='/dashboard'>volver</Link>
            <div>
                <form onSubmit={handleSubmit(submit)}>
                    <legend>Registrar Cliente</legend>
                    <fieldset>
                        <label>Nombre</label>
                        <input required type="text" placeholder="Nombre completo del cliente" 
                            {...register('clientName')}
                        />
                    </fieldset>
                    <fieldset>
                        <label>Identificación</label>
                        <input required type="text" placeholder="Cedula o RUC del cliente" 
                            {...register('identification')}
                        />
                    </fieldset>
                    <fieldset>
                        <label>Dirección</label>
                        <input required type="text" placeholder="Dirección del cliente" 
                            {...register('direction')}
                        />
                    </fieldset>
                    <fieldset className="mb-3">
                        <label>Teléfono</label>
                        <input required type="text" placeholder="Número telefónico del cliente" 
                            {...register('phone')}
                        />
                    </fieldset>
                    <fieldset>
                        <label>Correo</label>
                        <input required type="email" placeholder="Correo electrónico del cliente" 
                            {...register('email')}
                        />
                    </fieldset>
                    <button type="submit">
                        Registrar cliente
                    </button>
                </form>
            </div>
        </>
    );
};

export default RegisterClient;