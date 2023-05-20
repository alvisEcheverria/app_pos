import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getOrderThunk } from '../store/slices/getOrder.slice';
import { setGenOrder } from '../store/slices/genOrder.slice';

/* SE DEL ERROR QUE HAY AL ACTUALIZAR LAS CANTIDADES, PERO ESTÁ ACÁ, NO EN EL BACK, DEBO ARREGLARLO
MANEJANDOLO DESDE VARIABLES DISTINTAS, TRABAJANDO CON EL VALOR PREVIO Y ACTUALIZANDO EL CAMBIO EN LA VARIABLE PERO
EL TIEMPO NO ME DIO, LO SIENTO.
*/

const Orders = () => {

    const orderId = useSelector(state => state.orderId);
    const getOrderInProcess = useSelector(state => state.getOrder);
    const dispatch = useDispatch();

    console.log(getOrderInProcess);

    useEffect(() => {
        if (orderId) {
            dispatch(getOrderThunk(orderId));
        }
    }, [orderId]);

    const [qtyMin, setQtyMin] = useState(null);
    const [productIdMin, setProductIdMin] = useState(null);

    const updateOrderMin = (productId, qtyMinus) => {
        setProductIdMin(productId);
        setQtyMin(qtyMinus - 1);
    };

    useEffect(() => {
        if (qtyMin !== null) {
            const updatedOrderMin = {
                productId: productIdMin,
                newQuantity: qtyMin
            };

            axios.patch(`http://localhost:8000/api/v1/orders/${orderId}`, updatedOrderMin)
                .then(() => dispatch(getOrderThunk(orderId)))
                .catch(error => console.log(error.response));
        }
    }, [qtyMin, orderId, productIdMin]);

    const [qtyMax, setQtyMax] = useState(null);
    const [productIdMax, setProductIdMax] = useState(null);

    const updateOrderMax = (productId, qtyMax) => {
        setProductIdMax(productId);
        setQtyMax(qtyMax + 1);
    };

    useEffect(() => {
        if (qtyMax !== null) {
            const updatedOrderMax = {
                productId: productIdMax,
                newQuantity: qtyMax
            };

            axios.patch(`http://localhost:8000/api/v1/orders/${orderId}`, updatedOrderMax)
                .then(() => dispatch(getOrderThunk(orderId)))
                .catch(error => console.log(error.response));
        }
    }, [qtyMax, orderId, productIdMax]);

    const deleteProduct = (productId) =>{
        axios.delete(`http://localhost:8000/api/v1/orders/${orderId}/products/${productId}`)
            .then(()=> dispatch(getOrderThunk(orderId)))
    }

    const cancelOrder = () =>{
        axios.delete(`http://localhost:8000/api/v1/orders/${orderId}`)
            .then(()=> {
                dispatch(getOrderThunk(orderId));
                alert('Orden cancelada con éxito')
                setQtyMin(null);
                setQtyMax(null);
                dispatch(setGenOrder({}));
            })
    }

    const genInvoice = ()=> {
        axios.post('http://localhost:8000/api/v1/invoice', {orderId, emissionPoint: "001"})
            .then(res => {
                console.log(res.data)
                dispatch(getOrderThunk());
                alert('Compra éxitosa')
            })
    }

    return (
        <>
            <h1>Orden</h1>
            <ul>
                {
                    getOrderInProcess.map(order => (
                        <li className='product-orders-card' key={order.orderDetailId}>
                            <h2>{order.product.nameProduct}</h2>
                            <h3>{order.product.price} $</h3>
                            <div className='content-quantity'>
                                <button className='update-quantity-buttons' onClick={() => updateOrderMin(order.productId, order.quantity)}
                                    disabled={order.quantity === 1}
                                >
                                    -
                                </button>
                                <p className='quantity-in-order'>{order.quantity} und.</p>
                                <button className='update-quantity-buttons' onClick={() => updateOrderMax(order.productId, order.quantity)}>
                                    +
                                </button>
                            </div>
                            
                            <p className='total-products-in-order'>Total producto: {(order.product.price * order.quantity).toFixed(2)} $</p>
                            <button className='delete-button' onClick={()=> deleteProduct(order.productId)}>Borrar</button>
                        </li>
                    ))
                }
            </ul>
            <div className='content-total-price'>
                <p><span>Subtotal:</span>  {getOrderInProcess[0]?.subtotal} $</p>
                <p><span>IVA:</span> {getOrderInProcess[0]?.totalTax} $</p>
                <p><span>Total:</span> {getOrderInProcess[0]?.total} $</p>
            </div>
            <button onClick={cancelOrder}>cancelar orden</button>
            <button onClick={genInvoice}>checkout</button>
        </>
    );
};

export default Orders;
