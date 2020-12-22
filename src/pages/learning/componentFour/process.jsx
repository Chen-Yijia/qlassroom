import React, { Component } from "react";
import { Segment, Header, Form } from "semantic-ui-react";
import Editor from "./editor";

import "../../shared/layout.css";
// import _ from 'lodash'

class Process extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick = () => {
        // this.setState({ activeItem: name })
        // console.log(id)
        this.props.handleClick();
    };

    render() {

        return (

            <Segment>
                <Header floated="left" as="h3" style={{ marginTop: "6px" }} dividing>
                    Illustrate the main processes of your job from an input, throughput, output and collaboration point of view.
                </Header>

                <p style={{ marginTop: "48px", fontSize: "15px" }}>
                    Identify the key inputs you need to make to complete your tasks, the transformation system of the work done, and the outputs or results you expect to achieve in your job.  Explain how you need to work with others to completed particular work assignments.  You may use and input-throughput-output diagram to illustrate your key points.
                </p>

                <Form>
                    <Editor />
                    <div className="button-row" style={{ width: '320px' }}>

                        <Form.Button
                            onClick={this.handleOneSubmit}
                            disabled={this.state.buttonOneCompleted}
                            className="submit-button"
                            content="Submit"
                            labelPosition="right"
                            icon='upload'
                            color="green"
                        />
                        <Form.Button
                            onClick={this.handleOneSubmit}
                            disabled={this.state.buttonOneCompleted}
                            className="edit-button"
                            content="Edit"
                            labelPosition="right"
                            icon='edit'
                            color="green"
                        />
                    </div>
                </Form>
            </Segment>
        );
    }
}

export default Process;
