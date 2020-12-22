import React, { Component } from "react";
import { Segment, Header, Form, Table } from "semantic-ui-react";

import "../../shared/layout.css";
// import _ from 'lodash'

class CriteriaOne extends Component {
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
                    Measurement Criteria
                </Header>

                <p style={{ marginTop: "48px", fontSize: "15px" }}>
                    Evaluation on client acquisition may be made on engagement metrics such as the number of leads, first call resolution, average call handling time, escalations, conversion rate, and client retention.  Document your results.
                </p>

                <div>
                    <Form>
                        <Table celled>
                            <Table.Header>
                                <Table.Row>
                                    <Table.HeaderCell style={{ width: "300px" }}>
                                        Criteria
                                    </Table.HeaderCell>
                                    <Table.HeaderCell style={{ width: "300px" }}>
                                        Results
                                    </Table.HeaderCell>
                                    <Table.HeaderCell>
                                        Explanation
                                    </Table.HeaderCell>
                                </Table.Row>
                            </Table.Header>

                            <Table.Body>
                                <Table.Row>
                                    <Table.Cell>
                                        <Form.TextArea label='' placeholder='' />
                                    </Table.Cell>
                                    <Table.Cell>
                                        <Form.TextArea label='' placeholder='' />
                                    </Table.Cell>
                                    <Table.Cell>
                                        <Form.TextArea label='' placeholder='' />
                                    </Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell>
                                        <Form.TextArea label='' placeholder='' />
                                    </Table.Cell>
                                    <Table.Cell>
                                        <Form.TextArea label='' placeholder='' />
                                    </Table.Cell>
                                    <Table.Cell>
                                        <Form.TextArea label='' placeholder='' />
                                    </Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell>
                                        <Form.TextArea label='' placeholder='' />
                                    </Table.Cell>
                                    <Table.Cell>
                                        <Form.TextArea label='' placeholder='' />
                                    </Table.Cell>
                                    <Table.Cell>
                                        <Form.TextArea label='' placeholder='' />
                                    </Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell>
                                        <Form.TextArea label='' placeholder='' />
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

export default CriteriaOne;
