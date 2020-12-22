import React, { Component } from "react";
import { Icon, Table, Grid, Header, Accordion } from "semantic-ui-react";
import Nav from "../../components/shared/Nav";
import SubNav from "./SubNav";
import ModalIndustry from "./component/industry-modal";

import "../shared/layout.css";
// import _ from 'lodash'

class IndustrialSupervisorReportPage extends Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = (e, titleProps) => {
    const { index } = titleProps;
    const { activeIndex } = this.state;
    const newIndex = activeIndex === index ? -1 : index;

    this.setState({ activeIndex: newIndex });
  };

  render() {
    const { activeIndex } = this.state;

    const students = [
      {
        name: 'Anthony',
        reports: ['2020-07-01 to 2020-07-07', '2020-07-07 to 2020-07-14', '2020-07-14 to 2020-07-21']
      },
      {
        name: 'Keira',
        reports: ['2020-07-01 to 2020-07-07', '2020-07-07 to 2020-07-14', '2020-07-14 to 2020-07-21']
      },
      {
        name: 'Nichol',
        reports: ['2020-07-01 to 2020-07-07', '2020-07-07 to 2020-07-14', '2020-07-14 to 2020-07-21']
      },
    ]

    function IndustryModals(props) {
      const students = props.students;
      const modals = students.map((student) => <ModalIndustry student={student.name} reports={student.reports} />)
      return (modals)
    }

    return (
      <Grid>
        <Grid.Row columns={3}>
          <Grid.Column floated="left" attached>
            <Nav name="report" />
          </Grid.Column>

          <Grid.Column floated="left" className="sub-nav" width={1}>
            <SubNav name="report/industrial-supervisor" />
          </Grid.Column>

          <Grid.Column floated="left" className="main-panel" width={16}>
            <Grid.Row className="panel-header" fluid>
              <Header as="h2" content="Industrial Review" dividing />
            </Grid.Row>

            <Grid.Row>
              <Accordion>
                <Accordion.Title
                  active={activeIndex === 0}
                  index={0}
                  onClick={this.handleClick}
                >
                  <Icon name="dropdown" /> Active
                </Accordion.Title>
                <Accordion.Content active={activeIndex === 0}>
                  <Table selectable unstackable>
                    <Table.Header>
                      <Table.Row>
                        <Table.HeaderCell>Student</Table.HeaderCell>
                        {/* <Table.HeaderCell width={2} textAlign="center">
                          Status
                        </Table.HeaderCell> */}
                        {/* <Table.HeaderCell width={2} textAlign="center">
                          Date
                        </Table.HeaderCell> */}
                      </Table.Row>
                    </Table.Header>

                    <Table.Body>
                      <IndustryModals students={students} />
                      {/* <Table.Row>
                        <Table.Cell> Anthony</Table.Cell>
                        <Table.Cell textAlign="center">Pending</Table.Cell>
                        <Table.Cell textAlign="center">Pending</Table.Cell>
                      </Table.Row>
                      <Table.Row>
                        <Table.Cell>Keira</Table.Cell>
                        <Table.Cell textAlign="center">Pending</Table.Cell>
                        <Table.Cell textAlign="center">Pending</Table.Cell>
                      </Table.Row>
                      <Table.Row>
                        <Table.Cell>Nicholas</Table.Cell>
                        <Table.Cell textAlign="center">Pending</Table.Cell>
                        <Table.Cell textAlign="center">Pending</Table.Cell>
                      </Table.Row> */}
                    </Table.Body>
                  </Table>
                </Accordion.Content>

                <Accordion.Title
                  active={activeIndex === 1}
                  index={1}
                  onClick={this.handleClick}
                >
                  <Icon name="dropdown" /> Completed
                </Accordion.Title>
                <Accordion.Content active={activeIndex === 1}>
                  <Table selectable unstackable>
                    <Table.Header>
                      <Table.Row>
                        <Table.HeaderCell>Student</Table.HeaderCell>
                        {/* <Table.HeaderCell width={2} textAlign="center">
                          Status
                        </Table.HeaderCell>
                        <Table.HeaderCell width={2} textAlign="center">
                          Date
                        </Table.HeaderCell> */}
                      </Table.Row>
                    </Table.Header>

                    <Table.Body>
                      {/* <Table.Row>
                        <Table.Cell> 2020-07-01 to 2020-07-07</Table.Cell>
                        <Table.Cell textAlign="center">Pending</Table.Cell>
                        <Table.Cell textAlign="center">Pending</Table.Cell>
                      </Table.Row>
                      <Table.Row>
                        <Table.Cell>2020-07-01 to 2020-07-07</Table.Cell>
                        <Table.Cell textAlign="center">Pending</Table.Cell>
                        <Table.Cell textAlign="center">Pending</Table.Cell>
                      </Table.Row>
                      <Table.Row>
                        <Table.Cell>2020-07-01 to 2020-07-07</Table.Cell>
                        <Table.Cell textAlign="center">Pending</Table.Cell>
                        <Table.Cell textAlign="center">Pending</Table.Cell>
                      </Table.Row> */}
                    </Table.Body>
                  </Table>
                </Accordion.Content>
              </Accordion>
            </Grid.Row>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default IndustrialSupervisorReportPage;
