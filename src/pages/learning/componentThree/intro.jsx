import React, { Component } from "react";
import { Segment, Header, List, Button } from "semantic-ui-react";

import "../../shared/layout.css";
// import _ from 'lodash'

class IntroThree extends Component {
    constructor(props) {
        super(props);
        this.state = { buttonSubmit: props.complete };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick = () => {
        // this.setState({ activeItem: name })
        // console.log(id)
        this.props.handleClick();
    };

    render() {

        const { buttonSubmit } = this.state;

        function PanelButton(props) {
            const buttonSubmit = props.buttonSubmit;
            const handleClick = props.handleClick;
            if (buttonSubmit === false) {
                // return <Form.Button onClick={handleClick} style={{ marginLeft: "480px" }}>Submit</Form.Button>;
                return <Button
                    onClick={handleClick}
                    content="Mark as Complete"
                    // labelPosition='right'
                    // icon='check'
                    color='green'
                    className="component-button"
                    style={{ width: '160px' }}
                />;

            }
            if (buttonSubmit === true) {
                // return <Form.Button onClick={handleClick} style={{ marginLeft: "480px" }}>Edit</Form.Button>;
                return <Button
                    onClick={handleClick}
                    content="Completed"
                    labelPosition='right'
                    icon='check circle outline'
                    color='green'
                    className="component-button"
                    style={{ width: '160px' }}
                />;
            }
        }

        return (

            <Segment className="general-introduction" >
                <Header floated="left" as="h3" dividing style={{ marginTop: "0px" }}>
                    General Introduction
                  </Header>
                <p style={{ marginTop: "45px", fontSize: "15px" }}>
                    This involves four processes:
                </p>
                <List bulleted style={{ marginLeft: "40px", fontSize: "15px" }}>
                    <List.Item>
                        Project management, that is, the delivery, onboarding and implementation of the IEA project
                  </List.Item>
                    <List.Item>
                        Partnership/vendor management, that is, translating passive vendor relationships to a proactive collaborative partnership
                  </List.Item>
                    <List.Item>
                        Change management, that is, developing change initiatives for IEA implementation
                  </List.Item>
                    <List.Item>
                        Client relationship management, including all of the activities and strategies that vendors use to manage their interactions with their current and potential clients.
                  </List.Item>
                </List>
                <PanelButton buttonSubmit={buttonSubmit} handleClick={this.handleClick} />

            </Segment>
        );
    }
}

export default IntroThree;
