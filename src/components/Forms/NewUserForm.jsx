/*!

=========================================================
* Light Bootstrap Dashboard React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/light-bootstrap-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, { Component } from "react";
import {FormInputs} from '../FormInputs/FormInputs.jsx';
import Button from "react-bootstrap/lib/Button";

const dataModel = [
    {
        attribute: 'name',
        label: 'Nome',
        dataType: 'text',
        placeholder: 'Nome del paziente',
    },
    {
        attribute: 'surName',
        label: 'Cognome',
        dataType: 'text',
        placeholder: 'Cognome del paziente',
    },
    {
        attribute: 'fiscalCode',
        label: 'Codice Fiscale',
        dataType: 'text',
        placeholder: 'Codice fiscale del paziente',
    },
    {
        attribute: 'email',
        label: 'Indirizzo email',
        dataType: 'email',
        placeholder: 'Indirizzo email del paziente',
    },
    {
        attribute: 'phone',
        label: 'Numero di telefono',
        dataType: 'tel',
        placeholder: 'Recapito telefonico del paziente',
    }
];

export class NewUserForm extends Component {

    handleSubmit = (e) => {
        console.log(this.props.model);
        console.log(e);
        console.log(e.target.querySelector('input[attribute="name"]').value);
    }

    properties = [];

    constructor(props) {
        super(props);
        dataModel.map( r => {
            console.log(r);
            this.properties.push({
                label: r.label,
                type: r.dataType,
                bsClass: (r.classes) ? 'form-control ' + r.classes : 'form-control',
                placeholder: (r.placeholder) ? r.placeholder : '',
                defaultValue: (this.props.model[r.attribute]) ? this.props.model[r.attribute] : '',
                attribute: r.attribute,
                onChange: this.handleChange
            });
        });
        this.state = {entity: this.props.model};
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = (event) => {
        let entity = this.state.entity;
        console.log(event);
        entity[event.target.attribute] = event.target.value;
        this.setState({entity: entity});
        console.log(event.target['attribute']);
        console.log(event);
        console.log(this.state.entity);
    }

    render() {
        let form = <div className="content">
            <FormInputs
                ncols = {[
                    "col-md-3",
                    "col-md-3",
                    "col-md-3",
                    "col-md-3",
                    "col-md-3",
                ]}
                properties = {this.properties}
            />
            <Button bsStyle="primary">Primary</Button>
        </div>;
        return form;
    }
}

export default NewUserForm;
