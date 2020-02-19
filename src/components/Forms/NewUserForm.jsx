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
import {BaseForm} from "./BaseForm.jsx";
import PatienceRepository from "../../repositories/PatienceRepository";
import Patience from "../../models/Patience.jsx";

const dataModel = [
    {
        attribute: 'name',
        label: 'Nome',
        dataType: 'text',
        placeholder: 'Nome del paziente',
    },
    {
        attribute: 'surname',
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
        attribute: 'phoneNumber',
        label: 'Numero di telefono',
        dataType: 'tel',
        placeholder: 'Recapito telefonico del paziente',
    }
];

const repo = new PatienceRepository();

export class NewUserForm extends Component {
    properties = [];
    ncols = [
        "col-md-3",
        "col-md-3",
        "col-md-3",
        "col-md-3",
        "col-md-3",
    ];
    constructor(props) {
        super(props);
        dataModel.map( r => {
            this.properties.push({
                label: r.label,
                type: r.dataType,
                bsClass: (r.classes) ? 'form-control ' + r.classes : 'form-control',
                placeholder: (r.placeholder) ? r.placeholder : '',
                defaultValue: (this.props.model[r.attribute]) ? this.props.model[r.attribute] : '',
                attribute: r.attribute,
                onChange: this.handleChange
            });
            return r;
        });
        this.state = {entity: this.props.model};
    }

    render() {
        let form = <BaseForm
            ncols={this.ncols}
            properties={this.properties}
            repository={repo}
            model={new Patience()}
            ></BaseForm>;
        return form;
    }
}

export default NewUserForm;
