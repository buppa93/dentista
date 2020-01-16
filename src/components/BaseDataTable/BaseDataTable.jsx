import React, { Component } from 'react';
import { Table } from "react-bootstrap";

class BaseDataTable extends Component {

    constructor(props) {
        super(props);
        this.setState({rows: null});
    }

    handleFetchData = async () => {
        let dataFetched = null;
        await this.props.repository.fetchAll().then( r => {
            dataFetched = r;
        }).catch( error => {console.log(error)});
        this.setState({rows: dataFetched});
    }

    async componentDidMount() {
        await this.handleFetchData();
        console.log('_________________DATA_FETCHED________________');
        console.log(this.state.rows);
    }

    render() {
        const {
            rows
          } = this.state;
        //console.log(this.state.rows);
        if(rows) {
            return (
                <Table hover> {rows || 'Unknow'}
                    {/* <thead>
                        <tr>
                            {
                                this.props.columns.map((prop, key) => {
                                    return <th key={key}>{prop}</th>;
                                })
                            }
                          </tr>
                    </thead>
                    <tbody>
                        {
                            (this.state.rows !== null) ? this.state.rows.map((prop, key) => {
                                return (
                                    <tr key={key}>
                                        {
                                            prop.map((prop, key) => {
                                                return <td key={key}>{prop}</td>;
                                            })
                                        }
                                    </tr>
                                );
                            }) : 'Data'
                        }
                    </tbody> */}
                </Table>
            );
        } else {
            return ('Unkown');
        }
    }
}
export default (BaseDataTable)