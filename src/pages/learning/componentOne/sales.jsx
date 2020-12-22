import React, { Component } from "react";
import { Segment, Header, Form, Table } from "semantic-ui-react";

import "../../shared/layout.css";
// import _ from 'lodash'

class SalesProposal extends Component {
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

                <Header floated="left" as="h3" style={{ marginTop: "6px" }} dividing>
                    Sales Proposal
                </Header>

                <p style={{ marginTop: "48px", fontSize: "15px" }}>
                    A sales proposal is to be introduced and system demonstration may be made. Based on the actual client persona, a relationship is to be made that caters for the client’s needs and securing a contract.
                </p>
                <p style={{ fontSize: "15px" }}>
                    Discuss how you turn your insight of your client’s persona into action through a sales proposal.
                </p>
                <div>
                    <Form>
                        <Table celled>
                            <Table.Header>
                                <Table.Row>
                                    <Table.HeaderCell style={{ width: "300px" }}>
                                        Objective of Sales Proposal
                                    </Table.HeaderCell>
                                    <Table.HeaderCell><Form.Input fluid label='' placeholder='' /></Table.HeaderCell>
                                </Table.Row>
                            </Table.Header>

                            <Table.Body>
                                <Table.Row>
                                    <Table.Cell style={{ fontWeight: "bold" }}>
                                        Project Scope
                                    </Table.Cell>
                                    <Table.Cell>
                                        <Form.TextArea label='' placeholder='' />
                                    </Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell style={{ fontWeight: "bold" }}>
                                        Requirements List
                                    </Table.Cell>
                                    <Table.Cell>
                                        <Form.TextArea label='' placeholder='' />
                                    </Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell style={{ fontWeight: "bold" }}>
                                        Requirements List
                                    </Table.Cell>
                                    <Table.Cell>
                                        <Form.TextArea label='' placeholder='' />
                                    </Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell style={{ fontWeight: "bold" }}>
                                        Budget and Pricing
                                    </Table.Cell>
                                    <Table.Cell>
                                        <Form.TextArea label='' placeholder='' />
                                    </Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell style={{ fontWeight: "bold" }}>
                                        Contractual Terms and Conditions
                                    </Table.Cell>
                                    <Table.Cell>
                                        <Form.TextArea label='' placeholder='' />
                                    </Table.Cell>
                                </Table.Row>
                            </Table.Body>
                        </Table>
                        <PanelButton buttonSubmit={buttonSubmit} handleClick={this.handleClick} />
                    </Form>
                </div>

            </Segment>
        );
    }
}

export default SalesProposal;
