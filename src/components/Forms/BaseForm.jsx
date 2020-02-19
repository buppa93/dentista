import React, { Component } from "react";
import FormInputs from "../FormInputs/FormInputs";
import Button from "react-bootstrap/lib/Button";
import Spinner from "../Spinner/Spinner";

export class BaseForm extends Component {

    fields = [];

    handleSaveData = async () => {
        let newEntity = null;
        console.log("Inserting -> ");
        console.log(this.state.entity);
        this.setState({wait: true});
        await this.props.repository.save(this.state.entity).then( r => {
            console.log("Inserted -> ");
            console.log(r);
            newEntity = r;
            this.setState({wait: false});
        }).catch( error => {
            console.log(error);
            this.setState({wait: false});
        });

        return newEntity;
    }

    handleChange = (event) => {
        let entity = this.state.entity;
        entity[event.target.getAttribute('attribute')] = event.target.value;
        // this.props.properties.map( r => {
        //     r.onChange = this.handleChange;
        //     return r;
        // }
        this.setState({entity: entity});
        console.log("Actually -> ");
        console.log(this.state.entity);
    }

    handleSubmit = async (event) => {
        console.log(this.state.entity);
        this.handleSaveData();
    }

    constructor(props) {
        super(props);
        this.state = {
            entity: this.props.model,
            wait: false,
        };

        this.props.properties.map(r => {
            this.fields.push({
                ...r,
                onChange: this.handleChange
            })
        })
    }

    render() {
        let form = <div className="content">
            <FormInputs
                ncols = {this.props.ncols}
                properties = {this.fields}
            />
            <Button bsStyle="primary" onClick={this.handleSubmit}>Primary</Button>
        </div>;

        return (this.state.wait) ? <Spinner></Spinner> : form;
    }


}

export default BaseForm;