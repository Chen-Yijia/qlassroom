import React, { Component } from "react";
import { Segment, Header, Form, Table} from "semantic-ui-react";

import "../../shared/layout.css";
// import _ from 'lodash'

class ClientManage extends Component {
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
                    Client Management
                </Header>

                <p style={{ marginTop: "48px", fontSize: "15px" }}>
                    Client relationship management relates to client-vendor interactions that contribute to relationship building. The latter relationship building process is to develop client loyalty and retention.     
                </p>
                <p style={{ fontSize: "15px" }}>
                Summarise the pains and gains of client relationship management during the various stages of the project management cycle:         
                </p>

                <div>
                    <Form>
                    <Table celled>
                        <Table.Header>
                            <Table.Row>
                                <Table.HeaderCell >
                                Stages of Project Management
                                </Table.HeaderCell>
                                <Table.HeaderCell style={{ width: "400px" }}>
                                Pains of Interactions  
                                </Table.HeaderCell>
                                <Table.HeaderCell style={{ width: "400px" }}>
                                Gains of Interactions
                                </Table.HeaderCell>
                            </Table.Row>
                        </Table.Header>

                        <Table.Body>
                            <Table.Row>
                                <Table.Cell style={{ fontWeight: "bold", height: "120px", padding: "20px" }}>
                                    Analysis/Requirements
                                    
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
                                    Design
                                    
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
                                    Construction/Implementation
            
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
                                    Testing
    
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
                                Support\Deployment
    
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
export default ClientManage;
