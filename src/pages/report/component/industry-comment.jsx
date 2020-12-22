import React from 'react';
import { Modal, Table, Form, Button, Header, Segment } from 'semantic-ui-react';
import DateSelector from "./date-selector";



function ModalIndustryComment(props) {
    const [open, setOpen] = React.useState(false)

    // const students = [
    //     'Anthony',
    //     'Keira',
    //     'Nicholas'
    // ]

    return (
        <Modal
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
            open={open}
            trigger={
                <Table.Row>
                    <Table.Cell> {props.report}</Table.Cell>
                    <Table.Cell textAlign="center">Pending</Table.Cell>
                </Table.Row>
            }
        >
            <Modal.Header>Comment on Student's Report</Modal.Header>
            <Modal.Content>
                <Modal.Description>
                    <Form>
                        <Header as="h4">Student's Report</Header>
                        <Segment>
                            <p>
                                (a) Outreach and engagement, that is, to organise clinics, events and talks, to engage Charities  <br />
                                    (b) Client relationship and contact management, that is, managing the client’s needs and contracts

                            </p>
                        </Segment>

                        <Header as="h4">Comments </Header>
                        <Form.TextArea placeholder='' />
                        <Form.Group>
                            <Form.Field>
                                <label>Name</label>
                                {/* <DateSelector /> */}
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

export default ModalIndustryComment;