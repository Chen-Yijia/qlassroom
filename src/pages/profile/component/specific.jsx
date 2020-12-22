import React, { Component } from "react";
import { Segment, Form } from "semantic-ui-react";

import "./layout.css";
// import _ from 'lodash'

class PersonalInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.handleClick = this.handleClick.bind(this);
        // this.handleChange = this.handleChange.bind(this);
    }

    handleClick = () => {
        // this.setState({ activeItem: name })
        // console.log(id)
        this.props.handleStep(this.props.activeStep);
    };

    render() {


        return (
            <Form>
                <Segment style={{ marginTop: "20px" }}>
                    <Form.Input fluid label='Name of Student: ' placeholder='' />
                    <Form.Input fluid label='Student No: ' placeholder='' />
                    <Form.Input fluid label='Mobile No:  ' placeholder='' />
                    <Form.Input fluid label='Email: ' placeholder='' />
                </Segment>

                <Segment style={{ marginTop: "10px" }}>
                    <Form.Input fluid label='Partner Organization: ' placeholder='' />
                    <Form.Input fluid label='Period of Placement: ' placeholder='' />
                    <Form.Input fluid label='Name of Industrial Supervisor(s): ' placeholder='' />
                    <Form.Input fluid label='Position of Industrial Supervisor(s): ' placeholder='' />
                    <Form.Input fluid label='Contact No of Industrial Supervisor(s): ' placeholder='' />
                </Segment>

                <Segment style={{ marginTop: "10px" }}>
                    <Form.Input fluid label='Name of Academic Supervisor(s): ' placeholder='' />
                    <Form.Input fluid label='Contact No of Academic Supervisor(s): ' placeholder='' />
                </Segment>

                <Form.Button onClick={this.handleClick}>Confirm & Submit</Form.Button>
            </Form>
        );
    }
}

export default PersonalInfo;
