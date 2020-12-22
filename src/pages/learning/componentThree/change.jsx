import React, { Component } from "react";
import { Segment, Header, Form, Table} from "semantic-ui-react";

import "../../shared/layout.css";
// import _ from 'lodash'

class ChangeManage extends Component {
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
                    Change Management
                </Header>

                <p style={{ marginTop: "48px", fontSize: "15px" }}>
                    Change management refers to the disruptions of business process reengineering, including the shifting of strategic initiatives, task undertaken, job design and roles, use of technology and IT infrastructure, knowledge capabilities, service delivery and culture of organisation.
                </p>

                <div>
                    <Form>
                    <Table celled>
                        <Table.Header>
                            <Table.Row>
                                <Table.HeaderCell >
                                Disruptions of Business Process Reengineering
                                </Table.HeaderCell>
                                <Table.HeaderCell style={{ width: "400px" }}>
                                Unfreezing Stage: Status and Examples of this Dimension before Implementation  
                                </Table.HeaderCell>
                                <Table.HeaderCell style={{ width: "400px" }}>
                                Movement Stage: Status and Examples of this Dimension during IEA Implementation 
                                </Table.HeaderCell>
                            </Table.Row>
                        </Table.Header>

                        <Table.Body>
                            <Table.Row>
                                <Table.Cell style={{ fontWeight: "bold", height: "120px", padding: "20px" }}>
                                Strategic Initiatives of Organisation 
                                    
                                </Table.Cell>
                                <Table.Cell>
                                    <Form.TextArea label='' placeholder='' />
                                </Table.Cell>
                                <Table.Cell>
                                    <Form.TextArea label='' placeholder='' />
                                </Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell style={{ fontWeight: "bold", height: "120px", padding: "20px" }}>
                                Tasks Undertaken
                                    
                                </Table.Cell>
                                <Table.Cell>
                                    <Form.TextArea label='' placeholder='' />
                                </Table.Cell>
                                <Table.Cell>
                                    <Form.TextArea label='' placeholder='' />
                                </Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell style={{ fontWeight: "bold", height: "120px", padding: "20px" }}>
                                Job Design
            
                                </Table.Cell>
                                <Table.Cell>
                                    <Form.TextArea label='' placeholder='' />
                                </Table.Cell>
                                <Table.Cell>
                                    <Form.TextArea label='' placeholder='' />
                                </Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell style={{ fontWeight: "bold", height: "120px", padding: "20px" }}>
                                Use of Technology and IT Infrastructure
    
                                </Table.Cell>
                                <Table.Cell>
                                    <Form.TextArea label='' placeholder='' />
                                </Table.Cell>
                                <Table.Cell>
                                    <Form.TextArea label='' placeholder='' />
                                </Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell style={{ fontWeight: "bold", height: "120px", padding: "20px" }}>
                                Knowledge Capability
                                </Table.Cell>
                                <Table.Cell>
                                    <Form.TextArea label='' placeholder='' />
                                </Table.Cell>
                                <Table.Cell>
                                    <Form.TextArea label='' placeholder='' />
                                </Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                <Table.Cell style={{ fontWeight: "bold", height: "120px", padding: "20px" }}>
                                Service Delivery
                                </Table.Cell>
                                <Table.Cell>
                                    <Form.TextArea label='' placeholder='' />
                                </Table.Cell>
                                <Table.Cell>
                                    <Form.TextArea label='' placeholder='' />
                                </Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                <Table.Cell style={{ fontWeight: "bold", height: "120px", padding: "20px" }}>
                                Culture of Organisation
    
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
export default ChangeManage;
