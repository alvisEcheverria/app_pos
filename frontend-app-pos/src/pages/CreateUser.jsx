import axios from 'axios';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';

const CreateUser = () => {

    const { register, handleSubmit, reset } = useForm();
    const navigate = useNavigate();
    const [ roles, setRoles ] = useState([]);

    useEffect(()=>{
        axios.get('http://localhost:8000/api/v1/roles')
            .then(res => setRoles(res.data))
    },[])

    const submit = data => {
        axios.post('http://localhost:8000/api/v1/users', data)
            .then(res => alert('Usuario creado satisfactoriamente'))
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
                    <legend>Crear Usuario</legend>
                    <fieldset>
                        <label>Nombre de usuario</label>
                        <input required type="text" placeholder="Nombre de usuario" 
                            {...register('userName')}
                        />
                    </fieldset>
                    <fieldset>
                        <label>Password</label>
                        <input required type="password" placeholder="Password" 
                            {...register('password')}
                        />
                    </fieldset>
                    <fieldset>
                        <label>Rol</label>
                        <select {...register('roleId')} required>
                            {
                                roles.map((role) => (
                                    <option key={role.roleId} value={role.roleId}>
                                        {role.roleName}
                                    </option>
                                ))
                            }
                        </select>
                    </fieldset>
                    <button type="submit">
                        Submit
                    </button>
                </form>
            </div>
        </>
    );
};

export default CreateUser;