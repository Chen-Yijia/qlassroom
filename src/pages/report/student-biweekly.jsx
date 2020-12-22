import React, { Component } from "react";
import { Grid, Table, Header } from "semantic-ui-react";
import Nav from "../../components/shared/Nav";
import SubNav from "./SubNav";
import ModalReport from "./component/report";

import "../shared/layout.css";

import "./style.css";

class StudentBiweeklyReportPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = (id) => {
    // this.setState({ activeItem: name })
    // console.log(id)
    console.log(id);
  };

  render() {
    return (
      <Grid>
        <Grid.Row columns={3}>
          <Grid.Column floated="left" attached>
            <Nav name="report" />
          </Grid.Column>

          <Grid.Column floated="left" className="sub-nav" width={1}>
            <SubNav name="report/student-biweekly" />
          </Grid.Column>

          <Grid.Column floated="left" className="main-panel" width={16}>
            <Grid.Row className="panel-header" fluid>
              <Header as="h2" content="Biweekly Report" dividing />
            </Grid.Row>

            <Grid.Row>
              <Table selectable unstackable>
                <Table.Header>
                  <Table.Row>
                    <Table.HeaderCell>Week</Table.HeaderCell>
                    <Table.HeaderCell width={2} textAlign="center">
                      Status
                    </Table.HeaderCell>
                    <Table.HeaderCell width={2} textAlign="center">
                      Comments (Industrial)
                    </Table.HeaderCell>
                    <Table.HeaderCell width={2} textAlign="center">
                      {" "}
                      Comments (Academic)
                    </Table.HeaderCell>
                  </Table.Row>
                </Table.Header>

                <Table.Body >
                  <ModalReport />
                  <ModalReport />
                  <ModalReport />
                  <ModalReport />
                  <ModalReport />
                  <ModalReport />
                </Table.Body>
              </Table>
            </Grid.Row>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default StudentBiweeklyReportPage;
