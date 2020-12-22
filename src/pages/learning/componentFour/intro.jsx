import React, { Component } from "react";
import { Segment, Header, List, Button } from "semantic-ui-react";

import "../../shared/layout.css";
// import _ from 'lodash'

class IntroOne extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick = (id) => {
        // this.setState({ activeItem: name })
        console.log(id)
        // this.props.handleClick();
    };

    render() {

        return (

            <Segment className="general-introduction" >
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
                <Button
                    onClick={this.handleClick}
                    content="Mark as Complete"
                    labelPosition="right"
                    icon='check'
                    color="green"
                    className="component-button"
                    style={{ width: '200px' }}
                />
            </Segment>
        );
    }
}

export default IntroOne;
