import React from 'react';
import { Modal, Table, Form, Button, Header } from 'semantic-ui-react';
import DateSelector from "./date-selector";



function ModalReport() {
    const [open, setOpen] = React.useState(false)

    return (
        <Modal
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
            open={open}
            trigger={
                <Table.Row>
                    <Table.Cell> 2020-07-01 to 2020-07-07</Table.Cell>
                    <Table.Cell textAlign="center">Pending</Table.Cell>
                    <Table.Cell textAlign="center">Pending</Table.Cell>
                    <Table.Cell textAlign="center">Pending</Table.Cell>
                </Table.Row>
            }
        >
            <Modal.Header>Summary of Bi-Weekly Report</Modal.Header>
            <Modal.Content>
                <Modal.Description>
                    <Form>
                        <Form.Group>
                            <Form.Field>
                                <label>From Week</label>
                                <DateSelector />
                            </Form.Field>
                            <Form.Field>
                                <label>To Week</label>
                                <DateSelector />
                            </Form.Field>
                        </Form.Group>
                        <Header as="h4">Summary of work undertaken during the two weeks, highlighting what was observed, learnt and experienced by student</Header>
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
                    icon='upload'
                    onClick={() => setOpen(false)}
                    positive
                />
            </Modal.Actions>
        </ Modal>
    )
}

export default ModalReport