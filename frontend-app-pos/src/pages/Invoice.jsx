import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Invoice = () => {

  const [ invoice, setInvoice ] = useState([]);
  console.log(invoice);
  useEffect(()=>{
    axios.get('http://localhost:8000/api/v1/invoice')
      .then(res => setInvoice(res.data))
      .catch(error => console.log(error.response))
  },[])

  return (
    <>
      <Link to='/dashboard'>volver</Link>
      <ul>
        {
          invoice.map((factura) =>(
            <li className='card-invoice' key={factura.invoiceId}>
              <div>
                <p>Número de factura: {factura.invoiceId}</p>
                <p>caja: {factura.emissionPoint}</p>
                <p>establecimiento: {factura.establishment}</p>
                <br />
                <p>Cliente: {factura.order.client.clientName}</p>
                <p>Correo: {factura.order.client.email}</p>
                <p>Cédula / RUC: {factura.order.client.identification}</p>
                <br />
              </div>
              {
                factura.order.order_details.map( (product) =>(
                  <div>
                    <p>{product.product.nameProduct}</p>
                    <p>Precio: {product.product.price}</p>
                    <p>Unidades: {product.quantity}</p>
                  </div>
                ))
              }
              <div>
                <br />
                <p>Subtotal: {factura.subtotal}</p>
                <p>IVA 12%: {factura.totalTax}</p>
                <p>Total: {factura.total}</p>
                <br />
              </div>
            </li>
            
          ))
        }
      </ul>
    </>
  );
};

export default Invoice;