import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setGenOrder } from '../store/slices/genOrder.slice';
import { setOrderId } from '../store/slices/orderId.slice';
import getConfig from '../utils/getConfig';
import { getOrderThunk } from '../store/slices/getOrder.slice';

const AddProductoToOrder = () => {

    const [ products, setProducts ] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    const genOrder = useSelector(state => state.genOrder);
    const orderId = useSelector(state => state.orderId);
    const dispatch = useDispatch();

    useEffect(()=>{
        axios.get('http://localhost:8000/api/v1/products')
            .then(res => setProducts(res.data))
            .catch(error => console.log(error.response))
    }, []);

    const filteredProducts = products.filter((product) => 
        product.nameProduct.toLowerCase().includes(searchTerm.toLowerCase())
    );

    useEffect(() => {
        if (genOrder.clientId && genOrder.date && genOrder.productId) {
            axios.post('http://localhost:8000/api/v1/orders', genOrder, getConfig())
                .then(res => {
                    dispatch(setOrderId(res.data.orderId))
                    dispatch(getOrderThunk(orderId))
                })
                .catch(error => console.log(error.response));
        }
    }, [genOrder.clientId, genOrder.date, genOrder.productId]);

    const insertProductInOrder = (productId) => {
        if(genOrder.clientId && genOrder.date){
            dispatch(setGenOrder({...genOrder, productId, quantity: 1}));
        }
        else{
            alert('Debes seleccionar un cliente y la fecha para poder agregar un producto.')
        }
    }
    
    return (
        <div className='content-products'>
            <label className='search-product-label' htmlFor="search-product">Buscar Producto</label>
            <input id='search-product' type="text" value={searchTerm}  onChange={(e)=> setSearchTerm(e.target.value)} placeholder='Buscar producto por nombre'/>
       
            <ul className='content-products-cards'>
                {
                    filteredProducts.map((product) => (
                        <li className='card-product' key={product.productId} onClick={()=> insertProductInOrder(product.productId)}>
                            <img src="./laptop-apple.jpg" alt="" width='200px'/>
                            <h3>{product.nameProduct}</h3>
                            <h2 className='product-price'>{product.price} $</h2>
                            <p>{product.description}</p>
                        </li>
                        
                    ))
                }
            </ul>
        </div>
    );
};

export default AddProductoToOrder;