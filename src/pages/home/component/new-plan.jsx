import React from 'react'
import { Modal, Table, Form, Button, Header, Icon } from 'semantic-ui-react'


function ModalPlan() {
    const [open, setOpen] = React.useState(false)

    return (
        <Modal
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
            open={open}
            trigger={
                <div class='edit_plan'>
                    <Icon name="edit" fitted className='edit_plan' />
                </div>
            }
        >
            <Modal.Header>Week 2</Modal.Header>
            <Modal.Content>
                <Modal.Description>
                    <Header as='h5'>30/07/20 - 06/08/20</Header>
                    <Form>
                        <Form.TextArea
                            label='Planned Tasks'
                            value='(a) Outreach and engagement, that is, to organise clinics, events and talks, to engage Charities
(b) Client relationship and contact management, that is, managing the client’s needs and contracts' />
                        <Form.TextArea
                            label='Actual Work Done'
                            value='(a) Create the client persona' />
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
                    icon='save'
                    onClick={() => setOpen(false)}
                    positive
                />
            </Modal.Actions>
        </ Modal>
    )
}

export default ModalPlan;