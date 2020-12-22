import React, { Component } from "react";
import { Segment, Header, Image, Form, Table } from "semantic-ui-react";

import "../../shared/layout.css";
// import _ from 'lodash'

class ClientJourney extends Component {
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
                    Improve Customer Experience
                </Header>
                <Image src={'https://www.mckinsey.com/~/media/McKinsey/Industries/Public%20and%20Social%20Sector/Our%20Insights/The%20CEO%20guide%20to%20customer%20experience/PNG-Customer-experience-graphic.png?w=1536&h=2331&hash=D98F5BDECC2F6575BDB0E1DB90F8AAFC'} size='medium' floated='right' />
                <p style={{ marginTop: "48px", fontSize: "15px" }}>
                    Read: The CEO Guide To Customer Experience. McKinsey & Company. McKinsey Quarterly, August. 2016 on How to overcome challenges of specific types of projects <br />
                    <a href='https://www.mckinsey.com/business-functions/operations/our-insights/the-ceo-guide-to-customer-experience' target='_blank'>https://www.mckinsey.com/business-functions/operations/our-insights/the-ceo-guide-to-customer-experience</a>
                </p>
                <p style={{ fontSize: "15px" }}>
                    Based on the above journey to observe, shape and perform to improve client experience, reflect on how you attained client outreach and relationship:
                </p>

                <div>
                    <Form>
                        <Table celled>
                            <Table.Header>
                                <Table.Row>
                                    <Table.HeaderCell >
                                        Client Journey
                                    </Table.HeaderCell>
                                    <Table.HeaderCell style={{ width: "400px" }}>
                                        Reflection on Outreach
                                    </Table.HeaderCell>
                                    <Table.HeaderCell style={{ width: "400px" }}>
                                        Reflection on Relationship
                                    </Table.HeaderCell>
                                </Table.Row>
                            </Table.Header>

                            <Table.Body>
                                <Table.Row>
                                    <Table.Cell style={{ fontWeight: "bold" }}>
                                        Observe
                                    </Table.Cell>
                                    <Table.Cell>
                                        <Form.TextArea label='' placeholder='' />
                                    </Table.Cell>
                                    <Table.Cell>
                                        <Form.TextArea label='' placeholder='' />
                                    </Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell style={{ fontWeight: "bold" }}>
                                        Shape
                                    </Table.Cell>
                                    <Table.Cell>
                                        <Form.TextArea label='' placeholder='' />
                                    </Table.Cell>
                                    <Table.Cell>
                                        <Form.TextArea label='' placeholder='' />
                                    </Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell style={{ fontWeight: "bold" }}>
                                        Perform
                                    </Table.Cell>
                                    <Table.Cell>
                                        <Form.TextArea label='' placeholder='' />
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

export default ClientJourney;
