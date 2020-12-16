import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Alert, Button, Card, CardHeader, CardBody, Table, CardGroup, Col, Container, Form, FormGroup, Input, InputGroup, InputGroupAddon, InputGroupText, Label, Modal, ModalBody, ModalFooter, ModalHeader, Row } from 'reactstrap';
import AuthService from '../../../server/AuthService';
import axios from 'axios';
import Spinner from 'react-spinkit';
import AddActivity from 'components/Modals/Activities/AddActivities';

class Activity extends Component {
  constructor() {
    super();
    this.Auth = new AuthService();
    this.state = {
      loader: false,
      AddActivity: false,
      listActivity: '',
      status: '1',
      toggle: false
    }
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  onToggle = () => {
    this.setState({ 
      AddActivity: !this.state.AddActivity });
  }

  handleAddActivity = (event) => {
    this.setState({ loader: true });
    event.preventDefault();
    const req = { 
      user_id: this.Auth.getProfile().id,
      name: this.state.listActivity,  
      status: this.state.status
    };
    axios.post(process.env.REACT_APP_API_PATH + '/activity', req)
      .then(res => {
        this.setState({
          message: res.data.message,
          loader: false
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  toggle = (id) => {
    this.setState({
      toggle: !this.state.toggle
    })
  }

  render() {
    return (
      <React.Fragment>
        <div className="app flex-row align-items-top">
          <Container>
            <Row className="justify-content-center">
              <Col md="12 mt-3">
                <CardGroup>
                  <Card className="p-0">
                    <CardHeader>
                      <Form method="post" >
                        <h2>Aktivitas Kerja Yang Dilakukan Hari Ini</h2>
                      </Form>
                      <Row>
                        <Col xs="6" className="d-flex">
                          <Button onClick={this.onToggle} color="success" className="px-4" disabled={this.state.loader}>Add Activity</Button>
                        </Col>
                      </Row>
                    </CardHeader>
                    <CardBody>
                      <i className="fa fa-align-justify"></i> List Aktivitas
                      <Table responsive hover>
                        <thead>
                          <tr>
                            <th scope="col">No</th>
                            <th scope="col">Aktivitas</th>
                            <th scope="col">Status</th>
                            <th scope="col">actions</th>
                          </tr>
                        </thead>
                        <tbody>
                            <tr>
                              <td>1</td>
                              <td>Menjadi Seorang Kapiten</td>
                              <td>Done</td>
                              <td><Button color="primary"><i className="fa fa-edit"></i></Button><Button color="danger"><i className="fa fa-trash"></i></Button></td>
                            </tr>
                            <tr>
                              <td>2</td>
                              <td>Mempunyai Pedang Panjang</td>
                              <td>Inprogress</td>
                              <td><Button color="primary"><i className="fa fa-edit"></i></Button><Button color="danger"><i className="fa fa-trash"></i></Button></td>
                            </tr>
                            <tr>
                              <td>3</td>
                              <td>Kalo Berjalan Prok Prok Prok</td>
                              <td>Pending</td>
                              <td><Button color="primary"><i className="fa fa-edit"></i></Button><Button color="danger"><i className="fa fa-trash"></i></Button></td>
                            </tr>
                        </tbody>
                      </Table>
                    </CardBody>
                    <AddActivity 
                      add={this.state.AddActivity}
                      handleAdd={this.handleAddActivity}
                      loader={this.state.loader}
                      toggleAdd = {this.toggle}
                    />
                  </Card>
                </CardGroup>
              </Col>
            </Row>
          </Container>
        </div>
      </React.Fragment>
    );
  }
}

export default Activity;
