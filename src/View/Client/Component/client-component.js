import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './client-component.css'

class ClientComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            routeInvoice: '/cliente/facturar/'+this.props.data.id,
            routeEdit: '/cliente/editar/'+this.props.data.id,
            routeDelete: '/cliente/delete/'+this.props.data.id
        }
    }
    handleSubmit(e){
        e.preventDefault()
    }
    render() { 
        return (
            <div className="content_client-component" onSubmit={this.handleSubmit}>
                <div className="data"><p>{this.props.data.nombre}</p></div>
                <div className="data"><p>{this.props.data.direccion}</p></div>
                <div className="data"><p>{this.props.data.cuit}</p></div>
                <div><Link to={this.state.routeInvoice}><button className="btn">Nueva Factura</button></Link></div>
                <div><Link to={this.state.routeEdit}><button className="btn">Editar</button></Link></div>
                <div><Link to={this.state.routeDelete}><button className="btn">Borrar</button></Link></div>
            </div>
        );
    }
}
 
export default ClientComponent;