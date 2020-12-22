import React, { Component } from "react";
import { Segment, Header, Image, Form, Table, Icon } from "semantic-ui-react";

import "../../shared/layout.css";
// import _ from 'lodash'

class ProjectManage extends Component {
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
                    Project Management
                </Header>

                <p style={{ marginTop: "48px", fontSize: "15px" }}>
                    Project management refers to meeting delivery milestones on on-demand scalable services that are matched to the needs of the client.
                </p>
                <p style={{ fontSize: "15px" }}>
                    The Waterfall Model is a linear and sequential approach to project management. It is viewed as a waterfall because the model develops from one phase to another: analysis/requirements, design, construction/implementation, testing and deployment/support.
                </p>
                <p style={{ fontSize: "15px" }}>
                    The Spiral Life Cycle Model combines the Waterfall and iterative models of project management.  The spiral model combines the iterative development process and the analysis, design, construction and testing elements of the waterfall model.  The spiral model looks like a coil with a number of loops. Each loop of the spiral represents an iteration in the project management phase. The number of loops varies based on the number of iterations made.
                </p>
                <p style={{ fontSize: "15px" }}>
                    See <a href='https://www.differencebetween.com/difference-between-waterfall-and-vs-spiral-model/' target='_blank'>https://www.differencebetween.com/difference-between-waterfall-and-vs-spiral-model/</a> for the differences between the Waterfall and Spiral Model:
                </p>
                <Image src={'https://i.loli.net/2020/08/18/PNl93vKAoiZacUt.png'} size='large' />

                <Header floated="left" as="h4" style={{ marginTop: "30px" }} dividing>
                    Summarise what would be done in the various steps of the Waterfall:
                </Header>

                    <Form>
                        <Table celled>
                            <Table.Header>
                                <Table.Row>
                                    <Table.HeaderCell >
                                        Waterfall
                                    </Table.HeaderCell>
                                    <Table.HeaderCell style={{ width: "400px" }}>
                                        Challenges
                                    </Table.HeaderCell>
                                    <Table.HeaderCell style={{ width: "400px" }}>
                                        Decisions
                                    </Table.HeaderCell>
                                </Table.Row>
                            </Table.Header>

                            <Table.Body>
                                <Table.Row>
                                    <Table.Cell style={{ fontWeight: "bold", height: "120px", padding: "20px" }}>
                                        Analysis/Requirements
                                        <Icon name='long arrow alternate down' size='large' style={{ marginTop: '60px', marginLeft: '-100px' }} />
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
                                        <Icon name='long arrow alternate down' size='large' style={{ marginTop: '60px', marginLeft: '4px' }} />
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
                                        <Icon name='long arrow alternate down' size='large' style={{ marginTop: '60px', marginLeft: '-142px' }} />
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
                                        <Icon name='long arrow alternate down' size='large' style={{ marginTop: '60px', marginLeft: '1px' }} />
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
                                        Support/Deployment
                                        <Icon name='long arrow alternate down' size='large' style={{ marginTop: '60px', marginLeft: '-88px' }} />
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


                <Header floated="left" as="h4" style={{ marginTop: "30px" }} dividing>
                    Spiral Model
                </Header>
                <p style={{ marginTop: "85px", fontSize: "15px" }}>
                    When there is more complexity, the Spiral Model may be used by a team to adopt the steps of the Waterfall Model in a roundabout way: see the diagram below. Comment on the iterations (if any) you made in the table below.
                </p>
                    <Image src={'https://i.loli.net/2020/08/18/fzroMmdkn8AipTl.png'} size='large' style={{ marginBottom: '25px' }} />
                    
                    <Table celled>
                        <Table.Header>
                            <Table.Row>
                                <Table.HeaderCell >
                                    Spiral Model
                                </Table.HeaderCell>
                                <Table.HeaderCell style={{ width: "400px" }}>
                                    Challenges
                                </Table.HeaderCell>
                                <Table.HeaderCell style={{ width: "400px" }}>
                                    Decisions
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

                        </Table.Body>
                    </Table>
                    <PanelButton buttonSubmit={buttonSubmit} handleClick={this.handleClick} />

                </Form>

            </Segment>
        );
    }
}

export default ProjectManage;
