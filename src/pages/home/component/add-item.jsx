import React from 'react'
import { Modal, Table, Form, Button, Header, Icon } from 'semantic-ui-react'
import DateSelector from "./date-selector"


function ModalNewItem() {
    const [open, setOpen] = React.useState(false)

    return (
        <Modal
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
            open={open}
            trigger={
                <Button icon labelPosition='right' className='add-new-item' style={{ marginBottom: "10px" }}>
                    <Icon name='add' />
                  Add New Item
              </Button>
            }
        >
            <Modal.Header>Add New Task</Modal.Header>
            <Modal.Content>
                <Modal.Description>
                    <Form>
                        <Form.Group>
                            <Form.Field>
                                <label>Week</label>
                                {/* <DateSelector /> */}
                                <input placeholder='' />
                            </Form.Field>
                            <Form.Field>
                                <label>From Date</label>
                                <DateSelector />
                            </Form.Field>
                            <Form.Field>
                                <label>To Date</label>
                                <DateSelector />
                            </Form.Field>
                        </Form.Group>
                        <Header as="h4">Planned Tasks</Header>
                        <Form.TextArea placeholder='' />
                        <Header as="h4">Actual Work Done</Header>
                        <Form.TextArea placeholder='' />
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

export default ModalNewItem;