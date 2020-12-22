import React from 'react';
import { Modal, Form, Button, Header } from 'semantic-ui-react';
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
            <Modal.Header>Review by Academic Supervisor</Modal.Header>
            <Modal.Content>
                <Modal.Description>
                    <Form>
                        <Header as="h4">Review</Header>
                        <Form.TextArea placeholder='' />

                        <Header as="h4">Justification of Eligibility of Micro-credentials in Various Domains </Header>
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

export default ModalStudent;