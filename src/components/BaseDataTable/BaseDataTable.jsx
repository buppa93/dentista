import React, { Component } from 'react';
import { Table } from "react-bootstrap";
import Spinner from "../Spinner/Spinner";

class BaseDataTable extends Component {

    handleFetchData = async () => {
        let dataFetched = null;
        await this.props.repository.fetchAll().then( r => {
            dataFetched = r;
        }).catch( error => {console.log(error)});
        this.setState({rows: dataFetched});
    }

    async componentDidMount() {
        this.setState({});
        await this.handleFetchData();
    }

    render() {
        if(this.state) {
            if(this.state.rows) {
                return (
                    <Table hover>
                        <thead>
                            <tr>
                                {
                                    this.props.columns.map((value, key) => {
                                        return <th key={key}>{value}</th>;
                                    })
                                }
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.rows.map((prop, key) => {
                                    return (
                                        <tr key={key}>
                                            {
                                                this.props.columns.map( value => {
                                                    return <td key={key}>{prop[value]}</td>;
                                                })
                                            }
                                        </tr>
                                    );
                                })
                            }
                        </tbody>
                    </Table>
                );
            } else {
                return <Spinner></Spinner>;
            }
        } else {
            return <Spinner></Spinner>;
        }
    }
}
export default (BaseDataTable)