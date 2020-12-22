import React, { Component } from "react";
import { Segment, Header, Form } from "semantic-ui-react";
import Editor from "./editor";

import "../../shared/layout.css";
// import _ from 'lodash'

class Improvement extends Component {
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
                    Choose a particular aspect, assignment or project of your job where it is possible to bring about improvement or innovation on your job.
                </Header>

                <p style={{ marginTop: "48px", fontSize: "15px" }}>
                    You may describe particular bottlenecks, which you encounter: refer to relevant aspects of the input-throughput-output diagram.  The bottlenecks may arise as there may be a need to increase speed, have a more efficient process, reduce waste to create value, etc. from existing resources.
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

export default Improvement;
