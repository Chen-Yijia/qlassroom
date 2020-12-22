import React, { Component } from "react";
import { Segment, Header, List, Button } from "semantic-ui-react";

import "../../shared/layout.css";
// import _ from 'lodash'

class IntroTwo extends Component {
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
                <Header floated="left" as="h4" dividing style={{ marginTop: "0px" }}>
                    General Introduction
                  </Header>
                <p style={{ marginTop: "40px", fontSize: "15px" }}>
                    This involves two processes:
                </p>
                <List bulleted style={{ marginLeft: "40px", fontSize: "15px" }}>
                    <List.Item>
                        Business analysis, that is, to translate business requirements into technical requirements
                  </List.Item>
                    <List.Item>
                        Operations support, that is, providing consultancy and support
                  </List.Item>
                </List>
                <p style={{ fontSize: "15px" }}>
                    In this programme, work placements would be provided for participants to engage in various activities that lead to the implementation of foundational IEA systems. In doing so, participants would develop performance competencies that are necessary to deliver value to IEA project applications, with particular reference to Charities.
                </p>
                <p style={{ fontSize: "15px" }}>
                    This involves translating those needs into technical requirements in terms of input/output, interface, process flow or quality requirements. Modelling techniques such as data flow diagrams, UML (Unified Modeling Language) or entity relationship diagrams could be used.
                </p>
                <p style={{ fontSize: "15px" }}>
                    The overall purpose of this exercise to develop business solutions that address the business problems and technical requirements identified. In this journey to provide effective solutions to clients, support is being provided to the delivery of services. Document the requirements and support to your client.
                </p>
                <PanelButton buttonSubmit={buttonSubmit} handleClick={this.handleClick} />

            </Segment>
        );
    }
}

export default IntroTwo;
