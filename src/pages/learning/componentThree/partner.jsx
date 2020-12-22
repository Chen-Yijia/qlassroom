import React, { Component } from "react";
import { Segment, Header, Form, Table } from "semantic-ui-react";

import "../../shared/layout.css";
// import _ from 'lodash'

class PartnerManage extends Component {
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
                    Partnership/vendor Management
                </Header>

                <p style={{ marginTop: "48px", fontSize: "15px" }}>
                    Partnership/vendor management relates to having a sound vendor to client relationships in terms of keeping in mind the client’s IEA product features needed, price affordability, costs and benefits, community services, risk and security concerns, and other needs such as meeting compliance regulations.
                </p>
                <p style={{ fontSize: "15px" }}>
                    Summarise how the needs of the various features of the IEA system are attended to through the partnership.
                </p>

                <div>
                    <Form>
                        <Table celled>
                            <Table.Header>
                                <Table.Row>
                                    <Table.HeaderCell style={{ width: "520px" }}>
                                        IEA Features
                                    </Table.HeaderCell>
                                    <Table.HeaderCell>How are the needed IEA Features Attended To?
                                    </Table.HeaderCell>
                                </Table.Row>
                            </Table.Header>

                            <Table.Body>
                                <Table.Row>
                                    <Table.Cell style={{ fontWeight: "bold" }}>
                                        Price Affordability
                                    </Table.Cell>
                                    <Table.Cell>
                                        <Form.TextArea label='' placeholder='' />
                                    </Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell style={{ fontWeight: "bold" }}>
                                        Price Affordability
                                    </Table.Cell>
                                    <Table.Cell>
                                        <Form.TextArea label='' placeholder='' />
                                    </Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell style={{ fontWeight: "bold" }}>
                                        Community Services
                                    </Table.Cell>
                                    <Table.Cell>
                                        <Form.TextArea label='' placeholder='' />
                                    </Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell style={{ fontWeight: "bold" }}>
                                        Risk and Security Concerns
                                    </Table.Cell>
                                    <Table.Cell>
                                        <Form.TextArea label='' placeholder='' />
                                    </Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell style={{ fontWeight: "bold" }}>
                                        Compliance Regulations
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

export default PartnerManage;
