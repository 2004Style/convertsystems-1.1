// Componente OpcionesDePagos
import React from 'react';

export function OpcionesDePagos({ closeModal, producto, precio }) {
    return (
        <div className='modal-backdrop'>
            <div className='payment-modal'>
                <div className='payment-modal-header'>
                    <h5 className='payment-modal-title'><i className='fas fa-credit-card'></i> Métodos de Pago</h5>
                    <button className='mpclose' onClick={closeModal}><i className='fas fa-times'></i></button>
                </div>
                <div className='payment-modal-body'>
                    <div className='payment-method'>
                        <h6><i className='fab fa-paypal'></i> PayPal</h6>
                        <h5>Producto: {producto} <br /> Precio: {precio} </h5>
                        <p>Utiliza PayPal para realizar tu pago de manera segura.</p>
                        <button className='btn-paypal'><i className='fab fa-paypal'></i> Pagar con PayPal</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
