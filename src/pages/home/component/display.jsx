import React, { Component } from "react";
import { Segment, Form } from "semantic-ui-react";

import "./layout.css";
// import _ from 'lodash'

class InfoDisplay extends Component {
    constructor(props) {
        super(props);
        this.state = { currentStep: props.activeStep };
        this.handleClick = this.handleClick.bind(this);
        // this.handleChange = this.handleChange.bind(this);
    }

    handleClick = () => {
        // this.setState((state) => ({
        //     currentStep: state.currentStep + 1
        // }));
        this.props.handleEdit();
        window.scrollTo(0, 0)
    };

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
                    <Form.Field fluid>
                        <label>Name of Student:</label>
                        <input value='Anthony' readOnly />
                    </Form.Field>
                    <Form.Field fluid>
                        <label>Student No: </label>
                        <input value='1000023' readOnly />
                    </Form.Field>
                    <Form.Field fluid>
                        <label>Mobile No: </label>
                        <input value='88888888' readOnly />
                    </Form.Field>
                    <Form.Field fluid>
                        <label>Email:  </label>
                        <input value='abcd@gmail.com' readOnly />
                    </Form.Field>
                </Segment>

                <Segment style={{ marginTop: "10px" }}>
                    <Form.Field fluid>
                        <label>Partner Organization:  </label>
                        <input value='Organization name' readOnly />
                    </Form.Field>
                    <Form.Field fluid>
                        <label>Period of Placement:  </label>
                        <input value='2 months' readOnly />
                    </Form.Field>
                    <Form.Field fluid>
                        <label>Name of Industrial Supervisor(s): </label>
                        <input value='Jack' readOnly />
                    </Form.Field>
                    <Form.Field fluid>
                        <label>Position of Industrial Supervisor(s):</label>
                        <input value='Senior executive' readOnly />
                    </Form.Field>
                    <Form.Field fluid>
                        <label>Contact No of Industrial Supervisor(s):  </label>
                        <input value='99999999' readOnly />
                    </Form.Field>
                </Segment>

                <Segment style={{ marginTop: "10px" }}>
                    <Form.Field fluid>
                        <label>Name of Academic Supervisor(s): </label>
                        <input value='Tony' readOnly />
                    </Form.Field>
                    <Form.Field fluid>
                        <label>Contact No of Academic Supervisor(s):  </label>
                        <input value='77777777' readOnly />
                    </Form.Field>
                </Segment>

                {/* <StepButton currentStep={currentStep} handleClick={this.handleClick} /> */}
                <div className="component-button" style={{ width: '75px' }}>
                    <Form.Button onClick={this.handleClick}>Edit</Form.Button>
                </div>
            </Form>
        );
    }
}

export default InfoDisplay;
