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
import {
  Grid,
  Row,
  Col,
} from "react-bootstrap";

import { Card } from "components/Card/Card.jsx";
import Button from "components/CustomButton/CustomButton.jsx";
import NewUserForm from "../components/Forms/NewUserForm";
import {Patience} from "../models/Patience";

class NewPatience extends Component {

  dataModel = new Patience();

  handleNewPatience = () => {
    alert('Handle new patient');
    //return <Redirect to='./new' />;
    this.props.history.push('/new');
  }

  newUserHandler = (args) => {
    let patience = new Patience(args);
    console.log(patience)
  }

  render() {
    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <Row>
              <Col md={8}>
                <Button bsStyle="info" fillLeft fill onClick={this.handleNewPatience}>
                  Eccomi
                </Button>
              </Col>
              <Col md={4}>
                blablabla
              </Col>
            </Row>
            <Col md={12}>
              <Card
                plain
                title="Nuovo paziente"
                category="Here is a subtitle for this table"
                ctTableFullWidth
                ctTableResponsive
                content={
                  <NewUserForm
                      submitHandler={this.newUserHandler}
                      model={this.dataModel}
                  >
                  </NewUserForm>
                }
              />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default NewPatience;
