import React, { Component } from "react";
import { Segment, Header, Form } from "semantic-ui-react";
import Editor from "./editor";

import "../../shared/layout.css";
// import _ from 'lodash'

class Innovation extends Component {
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
                    What is the improvement or innovation you want to bring about in your job?
                </Header>

                <p style={{ marginTop: "48px", fontSize: "15px" }}>
                    Give the rationale of the innovation you want to introduce as a means of applying information, imagination and initiative to derive solutions to the problem at hand.
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

export default Innovation;
