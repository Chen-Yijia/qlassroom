import React, { Component } from "react";
import { Segment, Header, Form, Table } from "semantic-ui-react";

import "../../shared/layout.css";
// import _ from 'lodash'

class Donation extends Component {
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

                return <div className="component-button"
                    style={{ width: '120px' }}>
                    <Form.Button
                        onClick={handleClick}
                        content="Submit"
                        labelPosition='right'
                        icon='upload'
                        color='green'
                    /></div>
                    ;

            }
            if (buttonSubmit === true) {
                // return <Form.Button onClick={handleClick} style={{ marginLeft: "480px" }}>Edit</Form.Button>;
                return <div className="component-button"
                    style={{ width: '120px' }}>
                    <Form.Button
                        onClick={handleClick}
                        content="Edit"
                        labelPosition='right'
                        icon='edit'
                        color='green'
                    /></div>;
            }
        }

        return (

            <Segment>

                <Form>
                    {/* part four */}
                    <Header floated="left" as="h3" style={{ marginTop: "6px" }} >
                        4. Online and Offline Donation Management Services integrated with iSC Accounting (iSC Donor Management)
                    </Header>

                    <Table celled>
                        <Table.Body>
                            <Table.Row>
                                <Table.Cell>
                                    <Form.TextArea label='Business Requirements' placeholder='' />
                                </Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>
                                    <Form.TextArea label='Technical Requirements: data flow diagrams, UML or entity relationship diagrams ' placeholder='' />
                                </Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>
                                    <Form.TextArea label='Support Provided' placeholder='' />
                                </Table.Cell>
                            </Table.Row>
                        </Table.Body>
                    </Table>


                    <PanelButton buttonSubmit={buttonSubmit} handleClick={this.handleClick} />

                </Form>
            </Segment>
        );
    }
}

export default Donation;
