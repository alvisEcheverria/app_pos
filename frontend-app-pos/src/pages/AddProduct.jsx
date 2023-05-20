import axios from 'axios';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import getConfig from '../utils/getConfig';

const AddProduct = () => {

    const { register: registerCategory, handleSubmit: handleSubmitCategory } = useForm();
    const { register, handleSubmit: handleSubmitProduct } = useForm();

    const navigate = useNavigate()
    const [ categories, setCategories ] = useState([])

    const getCategories = () => {
        axios.get('http://localhost:8000/api/v1/categories', getConfig)
            .then(res => setCategories(res.data))
            .catch(error => console.log(error.response))
    }

    const submitCategory = data => {
        axios.post('http://localhost:8000/api/v1/categories', data)
            .then(res => {
                alert('Categoria creada satisfactoriamente')
                getCategories();
            })
            .catch(error => {
                    alert(error.response.data.message)
                    console.log(error.response)
            
            })
    };

    useEffect(()=> {
        getCategories();
    },[]);

    const submit = data => {
        axios.post('http://localhost:8000/api/v1/products', data)
            .then(res => alert('Producto creado satisfactoriamente'))
            .catch(error => {
                    alert(error.response.data.message)
                    console.log(error.response)
            
            })
        navigate('/dashboard')
    };

    return (
        <>
            <Link to='/dashboard'>volver</Link>
            <div>
                <form onSubmit={handleSubmitCategory(submitCategory)}>
                    <legend>Crear nueva categoria</legend>
                    <fieldset>
                        <label>Categoria</label>
                        <input required type="text" placeholder="Nombre de la categoria" 
                            {...registerCategory('categoryName')}
                        />
                    </fieldset>
                    <button type='submit'>crear</button>
                </form>
                <hr />
                <form onSubmit={handleSubmitProduct(submit)}>
                    <legend>Añadir Producto</legend>
                    <fieldset>
                        <label>Nombre del Producto</label>
                        <input required type="text" placeholder="Nombre del Producto" 
                            {...register('nameProduct')}
                        />
                    </fieldset>
                    <fieldset>
                        <label>Codigo del Producto</label>
                        <input required type="text" placeholder="Codigo del Producto" 
                            {...register('code')}
                        />
                    </fieldset>
                    <fieldset>
                        <label>Categoria</label>
                        <select {...register('categoryId')} required>
                            {
                                categories.map((category) => (
                                    <option key={category.categoryId} value={category.categoryId}>
                                        {category.categoryName}
                                    </option>
                                ))
                            }
                        </select>
                    </fieldset>
                    <fieldset>
                        <label>Descripción del Producto</label>
                        <input required type="text" placeholder="Descripción del Producto" 
                            {...register('description')}
                        />
                    </fieldset>
                    <fieldset className="mb-3">
                        <label>Cantidad</label>
                        <input required type="text" placeholder="Descripción del Producto" 
                            {...register('quantity')}
                        />
                    </fieldset>
                    <fieldset>
                        <label>Unidad de Medida</label>
                        <input required type="text" placeholder="Unidad de Medida" 
                            {...register('unitMeasure')}
                        />
                    </fieldset>
                    <fieldset>
                        <label>Precio</label>
                        <input required type="number" placeholder="Precio" 
                            {...register('price')}
                        />
                    </fieldset>
                    
                    <button type="submit">
                        Añadir producto
                    </button>
                </form>
            </div>
        </>
    );
};

export default AddProduct;