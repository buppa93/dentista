import React, { Component } from 'react';
import {Box, Button, Col, Content, Row} from "adminlte-2-react";
import BaseDataTable from "./baseDataTable";
import PatienceRepository from "../repositories/patienceRepository";

const repo = new PatienceRepository();
const columns = [
    { title: 'Name', data: 'name' },
    { title: 'Username', data: 'username' },
];

class PatientsListComponents extends Component {

    render() {
        return (
            <Content title="Patients list" subTitle="" browserTitle="Patients list">
                <Row>
                    <Col xs={12}>
                        <h1>Patients list</h1>
                        <BaseDataTable
                            columns={columns}
                            repository={repo}
                        ></BaseDataTable>
                    </Col>
                </Row>
            </Content>
        );
    }
}

export default (PatientsListComponents)