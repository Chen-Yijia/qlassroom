import React, { Component } from "react";
import { Segment, Header, List, Button } from "semantic-ui-react";

import "../../shared/layout.css";
// import _ from 'lodash'

class IntroOne extends Component {
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

            <Segment className="general-introduction">
                <Header floated="left" as="h4" dividing style={{ marginTop: "0px" }}>
                    General Introduction
                    </Header>
                <p style={{ marginTop: "40px", fontSize: "15px" }}>
                    This involves two processes:
                 </p>
                <List bulleted style={{ marginLeft: "40px", fontSize: "15px" }}>
                    <List.Item>Outreach and engagement, that is, to organise clinics, events and talks, to engage Charities
                        </List.Item>
                    <List.Item>Client relationship and contact management, that is, managing the client’s needs and contracts
                        </List.Item>
                </List>
                {/* <Button onClick={this.handleClick} style={{ marginLeft: "450px" }}>Mark as Complete</Button> */}
                <PanelButton buttonSubmit={buttonSubmit} handleClick={this.handleClick} />
            </Segment>
        );
    }
}

export default IntroOne;
