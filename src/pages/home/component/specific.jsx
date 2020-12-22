import React, { Component } from "react";
import { Segment, Form } from "semantic-ui-react";

import "./layout.css";
// import _ from 'lodash'

class PersonalInfo extends Component {
    constructor(props) {
        super(props);
        this.state = { currentStep: props.activeStep };
        this.handleClick = this.handleClick.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        // this.handleChange = this.handleChange.bind(this);
    }

    handleClick = () => {
        // this.setState((state) => ({
        //     currentStep: state.currentStep + 1
        // }));
        this.props.handleStep();
        window.scrollTo(0, 0)
    };

    handleSubmit = () => {
        console.log()
    }

    render() {

        // const { currentStep } = this.state;

        // function StepButton(props) {
        //     const currentStep = props.currentStep;
        //     const handleClick = props.handleClick;
        //     if (currentStep === 2) {
        //         return <Form.Button onClick={handleClick}>Confirm & Submit</Form.Button>
        //     }
        //     if (currentStep > 2) {
        //         return <Form.Button onClick={handleClick}>Edit</Form.Button>
        //     }
        // }

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

                {/* <StepButton currentStep={currentStep} handleClick={this.handleClick} /> */}
                <div className="component-button" style={{ width: '160px' }}>
                    <Form.Button type={"submit"} onClick={this.handleClick} className="component-button" style={{ width: '160px' }}>Confirm & Submit</Form.Button>
                </div>

            </Form>
        );
    }
}

export default PersonalInfo;
