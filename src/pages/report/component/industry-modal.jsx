import React from 'react';
import { Table, Accordion, Icon } from 'semantic-ui-react';
import ModalIndustryComment from "./industry-comment";
import ModalStudent from "./industry-student";

function ReportModals(props) {
    const reports = props.reports;
    const modals = reports.map((report) => <ModalIndustryComment report={report} />)
    return (modals)
}

function ModalIndustry(props) {
    const [activeAccordion, setActiveAccordion] = React.useState(false)

    return (
        <Table.Row>
            {/* <Table.Cell> <ModalIndustryComment student={props.student} /> </Table.Cell> */}
            {/* <Table.Cell> {props.student}</Table.Cell> */}
            <Table.Cell>
                <Accordion>
                    <Accordion.Title
                        active={activeAccordion}
                        onClick={() => setActiveAccordion(!activeAccordion)}
                    >
                        <Icon name='dropdown' />
                        {props.student}
                        <ModalStudent />
                    </Accordion.Title>
                    <Accordion.Content active={activeAccordion}>
                        <Table selectable unstackable>
                            <Table.Header>
                                <Table.Row>
                                    <Table.HeaderCell>Report</Table.HeaderCell>
                                    <Table.HeaderCell width={2} textAlign="center">
                                        Status
                                    </Table.HeaderCell>
                                </Table.Row>
                            </Table.Header>
                            <Table.Body>
                                <ReportModals reports={props.reports} />
                            </Table.Body>
                        </Table>

                    </Accordion.Content>


                </Accordion>
            </Table.Cell>


            {/* <Table.Cell textAlign="center">Pending</Table.Cell> */}
            {/* <Table.Cell textAlign="center">Pending</Table.Cell> */}
        </Table.Row>
    )
}

export default ModalIndustry;