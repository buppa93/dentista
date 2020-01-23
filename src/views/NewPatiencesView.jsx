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
import PatienceRepository from "../repositories/PatienceRepository.jsx";

const repo = new PatienceRepository();

class NewPatiencesView extends Component {

  handleNewPatience = () => {
    alert('Handle new patient');
  }

  render() {
    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <Row>
              <Col md={8}>
                <Button bsStyle="info" fillLeft fill onClick={this.handleNewPatience}>
                  Nuovo Paziente
                </Button>
              </Col>
              <Col md={4}>
                Nuovo Paziente
              </Col>
            </Row>
            <Col md={12}>
              <Card
                plain
                title="Nuovo Paziente"
                category="Here is a subtitle for this table"
                ctTableFullWidth
                ctTableResponsive
                content={"Porco Dio"}
              />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default NewPatiencesView;
