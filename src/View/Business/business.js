import React, { Component } from 'react';
import BusinessApi from '../../Service/business-api';

import '../CreateBusiness/create-business.css';
import './business.css';

const businessApi = new BusinessApi();

class Business extends Component {
    constructor(props) {
        super(props);
        this.state = {
            empresa: {
                id: "",
                nombre: "",
                direccion: "",
                provincia: "",
                pais: "",
                cuit: "",
                codigo_postal: "",
                ciudad: "",
                condicionIva: "RESPONSABLE_INSCRIPTO"
            }
        }
        this.handleChangeInput = this.handleChangeInput.bind(this);
        this.handleSubmitBusiness = this.handleSubmitBusiness.bind(this);
        this.handleDeleteBusiness = this.handleDeleteBusiness.bind(this);
    }
    componentDidMount(){
        businessApi.getBusiness()
            .then( res => {
                this.setState({empresa: res})
            })
            .catch( e => {
                console.log(e);
            })
    }
    handleChangeInput(e){
        let empresa = this.state.empresa;
        empresa[e.target.name] = e.target.value;
        this.setState({empresa})
    }
    handleSubmitBusiness(e){
        e.preventDefault();
        businessApi.createBusiness(this.state.empresa)
            .then( () => {
                this.props.callback(true);
            })
            .catch( e => {
                console.log(e);
            })
    }
    handleDeleteBusiness(e){
        e.preventDefault()
        businessApi.deleteBusiness(this.state.empresa.id)
            .then( () => {
                this.props.callback(false);
            })
            .catch( e => {
                console.log(e);
            })
    }
    render() { 
        return (
            <div className="create-business">
                <h3>Datos de la Empresa</h3>
                <form>
                    <input type="text" name="nombre" value={this.state.empresa.nombre} onChange={this.handleChangeInput} placeholder="Ingrese su Nombre y Apellido" className="input_create-business input"/>
                    <input type="text" name="direccion" value={this.state.empresa.direccion} onChange={this.handleChangeInput} placeholder="Ingrese su Dirección" className="input_create-business input"/>
                    <input type="text" name="ciudad" value={this.state.empresa.ciudad} onChange={this.handleChangeInput} placeholder="Ingrese su Ciudad" className="input_create-business"/>
                    <input type="text" name="provincia" value={this.state.empresa.provincia} onChange={this.handleChangeInput} placeholder="Ingrese su Provincia" className="input_create-business"/>
                    <input type="text" name="pais" value={this.state.empresa.pais} onChange={this.handleChangeInput} placeholder="Ingrese su Pais" className="input_create-business"/>
                    <input type="text" name="codigo_postal" value={this.state.empresa.codigo_postal} onChange={this.handleChangeInput} placeholder="Ingrese Código Postal" className="input_create-business"/>
                    <input type="text" name="cuit" value={this.state.empresa.cuit} onChange={this.handleChangeInput} placeholder="Ingrese Cuit" className="input_create-business"/>
                    <select name="condicionIva" value={this.state.empresa.condicionIva} onChange={this.handleChangeInput} className="input_create-business">
                        <option value="RESPONSABLE_INSCRIPTO">Responsable Inscripto</option>
                        <option value="MONOTRIBUTISTA">Monotributista</option>
                        <option value="CONSUMIDOR_FINAL">Consumidor Final</option>
                    </select>
                    <div className="content_button">
                        <button onSubmit={this.handleSubmitBusiness} type="submit" className="btn">Actualizar</button>
                        <button onClick={this.handleDeleteBusiness} type="submit" className="btn">Borrar</button>
                    </div>
                </form>
                <br/>
            </div>
        );
    }
}
 
export default Business;