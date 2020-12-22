import React, { Component } from "react";
import { Segment, Header, Image, Form, Table } from "semantic-ui-react";

import "../../shared/layout.css";
// import _ from 'lodash'

class CustomerPersona extends Component {
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
                    Create Customer Persona
                </Header>

                <p style={{ marginTop: "48px", fontSize: "15px" }}>
                    This is the initiation stage of the project. Among other things, the processes involve the establishment of leads and the discovery of the client persona and deciphering the actual client persona.
                </p>
                <p style={{ fontSize: "15px" }}>
                    See illustration below from: What is customer persona? Create customer persona in 4 simple steps: <a href='http://heartofcodes.com/what-is-customer-persona-and-its-importance/' target='_blank'>http://heartofcodes.com/what-is-customer-persona-and-its-importance/</a>, March 24, 2018.
                </p>
                <Image src={'http://heartofcodes.com/wp-content/uploads/2018/03/When-clients-need-a-branding-a-website-or-a-social-media-strategy-it-requires-a-clear-design-process.-A-client-who-understands-the-basics-of-this-process-will-appreciate-what-happens-at-each-step.-2.png'} size='medium' />

                <Header floated="left" as="h3" style={{ marginTop: "30px" }} dividing>
                    Describe the Actual Persona of Your Client
                </Header>

                <div>
                    <Form>
                        <Form.Input fluid label='Name of Client: ' placeholder='' />
                        <Table celled>
                            <Table.Header>
                                <Table.Row>
                                    <Table.HeaderCell style={{ width: "520px" }}>
                                        Persona
                                    </Table.HeaderCell>
                                    <Table.HeaderCell>What are the digital marketing considerations <br />that may be extrapolated from the four dimensions of your client’s persona?</Table.HeaderCell>
                                </Table.Row>
                            </Table.Header>

                            <Table.Body>
                                <Table.Row>
                                    <Table.Cell>
                                        <Form.TextArea label='The Who?' placeholder='' />
                                    </Table.Cell>
                                    <Table.Cell>
                                        <Form.TextArea label='Considerations' placeholder='' />
                                    </Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell>
                                        <Form.TextArea label='The What?' placeholder='' />
                                    </Table.Cell>
                                    <Table.Cell>
                                        <Form.TextArea label='Considerations' placeholder='' />
                                    </Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell>
                                        <Form.TextArea label='The Why?' placeholder='' />
                                    </Table.Cell>
                                    <Table.Cell>
                                        <Form.TextArea label='Considerations' placeholder='' />
                                    </Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell>
                                        <Form.TextArea label='The How?' placeholder='' />
                                    </Table.Cell>
                                    <Table.Cell>
                                        <Form.TextArea label='Considerations' placeholder='' />
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

export default CustomerPersona;
