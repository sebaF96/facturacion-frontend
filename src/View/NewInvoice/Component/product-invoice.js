import React, { Component } from 'react';

import './product-invoice.css'

class ProductInvoice extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cantidad: "",
        }
        this.handleOnClickAdd = this.handleOnClickAdd.bind(this);
    }
    handleOnClickAdd(){
        this.props.callback(this.props.data)
    }
    render() { 
        return (
            <div className="content_product-invoice">
                <div><p>{this.props.data.codigo}</p></div>
                <div><p>{this.props.data.nombre}</p></div>
                <input type="text" placeholder="Ingrese Cantidad" value={this.state.cantidad} onChange={this.handleChange} className="input"/>
                <button onClick={this.handleOnClickAdd} type="submit" className="btn">Agregar</button>
            </div>
        );
    }
}
 
export default ProductInvoice;