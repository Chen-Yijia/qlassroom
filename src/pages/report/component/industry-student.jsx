import React from 'react';
import { Modal, Form, Button, Header, List, Segment } from 'semantic-ui-react';
import DateSelector from "./date-selector";



function ModalStudent(props) {
    const [open, setOpen] = React.useState(false)

    return (
        <Modal
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
            open={open}
            trigger={
                <Button basic size='mini' style={{ marginLeft: '5px' }}>Overall Review</Button>
            }
        >
            <Modal.Header>Overall Review by Industrial Supervisor</Modal.Header>
            <Modal.Content>
                <Modal.Description>
                    <p>
                        Use the scale below to evaluate the participant’s performance during the placement. Insert “NA” if the item evaluated is not applicable or not enough information is available to form a judgment.
                    </p>
                    <List ordered >
                        <List.Item>
                            Far below expectation- needs much improvement, a concern
                        </List.Item>
                        <List.Item>
                            Below expectation – needs some improvement to meet standards
                        </List.Item>
                        <List.Item>
                            Acceptable – meets standards at average level
                         </List.Item>
                        <List.Item>
                            Above expectations – performs above average level
                        </List.Item>
                        <List.Item>
                            Far above expectations – a definite strength, performs well beyond average levels
                        </List.Item>

                    </List>
                    <Form>
                        {/* Segement A */}
                        <Segment>
                            <Header as="h4" >A.	Job Learning and Skills Improvement</Header>

                            <Form.Group widths='60'>
                                <Form.Field>
                                    <label>Able to adapt and learn new tasks </label>
                                    <input placeholder='' />
                                </Form.Field>
                                <Form.Field>
                                    <label>Shows continual improvement and agility in completing work</label>
                                    <input placeholder='' />
                                </Form.Field>
                                <Form.Field>
                                    <label>Able to work independently</label>
                                    <input placeholder='' />
                                </Form.Field>
                            </Form.Group>
                            <Form.TextArea label='Examples and Comments' placeholder='' />
                        </Segment>

                        {/* Segement B */}
                        <Segment>
                            <Header as="h4" >B.  Decisional and Problem-Solving Skills</Header>

                            <Form.Group widths='60'>
                                <Form.Field>
                                    <label>Uses analytical skills to reflect on problems  </label>
                                    <input placeholder='' />
                                </Form.Field>
                                <Form.Field>
                                    <label>Focusses on solutions to solve problems at work </label>
                                    <input placeholder='' />
                                </Form.Field>
                                <Form.Field>
                                    <label>Makes sound judgements </label>
                                    <input placeholder='' />
                                </Form.Field>
                            </Form.Group>
                            <Form.TextArea label='Examples and Comments' placeholder='' />
                        </Segment>

                        {/* Segement D */}
                        <Segment>
                            <Header as="h4" >D.  Communication Skills</Header>

                            <Form.Group widths='60'>
                                <Form.Field>
                                    <label>Communicates orally with clarity</label>
                                    <input placeholder='' />
                                </Form.Field>
                                <Form.Field>
                                    <label>Able to comprehend both oral and written reports and information</label>
                                    <input placeholder='' />
                                </Form.Field>
                                <Form.Field>
                                    <label>Written communication is mature, appropriate and dynamic</label>
                                    <input placeholder='' />
                                </Form.Field>
                            </Form.Group>
                            <Form.TextArea label='Examples and Comments' placeholder='' />
                        </Segment>

                        {/* Segement E */}
                        <Segment>
                            <Header as="h4" >E.  Collaboration and Team-Building </Header>

                            <Form.Group widths='60'>
                                <Form.Field>
                                    <label>Takes initiative and collaborates with others at work</label>
                                    <input placeholder='' />
                                </Form.Field>
                                <Form.Field>
                                    <label>Able to work productively as a team with others</label>
                                    <input placeholder='' />
                                </Form.Field>
                                <Form.Field>
                                    <label>Accepts suggestions and is respectful of others</label>
                                    <input placeholder='' />
                                </Form.Field>
                            </Form.Group>
                            <Form.TextArea label='Examples and Comments' placeholder='' />
                        </Segment>


                        {/* Segement F */}
                        <Segment>
                            <Header as="h4" >F.  Attitudes Toward Work </Header>

                            <Form.Group widths='60'>
                                <Form.Field>
                                    <label>Has a sense of responsibility and commitment </label>
                                    <input placeholder='' />
                                </Form.Field>
                                <Form.Field>
                                    <label>Is proactive and positive at work</label>
                                    <input placeholder='' />
                                </Form.Field>
                                <Form.Field>
                                    <label>Knows and upholds integrity, and business and professional ethics</label>
                                    <input placeholder='' />
                                </Form.Field>
                            </Form.Group>
                            <Form.TextArea label='Examples and Comments' placeholder='' />
                        </Segment>

                        {/* Segement G*/}
                        <Segment>
                            <Header as="h4" >G.  Quality of Work</Header>

                            <Form.Group widths='60'>
                                <Form.Field>
                                    <label>Performs well under pressure </label>
                                    <input placeholder='' />
                                </Form.Field>
                                <Form.Field>
                                    <label>Able to generate ideas, think creatively and innovate </label>
                                    <input placeholder='' />
                                </Form.Field>
                                <Form.Field>
                                    <label>Performs accurate, timely and quality work </label>
                                    <input placeholder='' />
                                </Form.Field>
                            </Form.Group>
                            <Form.TextArea label='Examples and Comments' placeholder='' />
                        </Segment>


                        <Header as="h4">Any other Suggestions and Comments </Header>
                        <Form.TextArea placeholder='' />
                        <Form.Group>
                            <Form.Field>
                                <label>Name</label>
                                <input placeholder='' />
                            </Form.Field>
                            <Form.Field>
                                <label>Date</label>
                                <DateSelector />
                            </Form.Field>
                        </Form.Group>
                    </Form>
                </Modal.Description>
            </Modal.Content>
            <Modal.Actions>
                <Button color='black' onClick={() => setOpen(false)}>
                    Cancel
        </Button>
                <Button
                    content="Submit"
                    labelPosition='right'
                    icon='upload'
                    onClick={() => setOpen(false)}
                    positive
                />
            </Modal.Actions>
        </Modal>
    )
}

export default ModalStudent;