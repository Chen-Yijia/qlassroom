import React, { Component } from "react";
import { Segment, Grid, Accordion, Header } from "semantic-ui-react";
import Nav from "../../components/shared/Nav";
import SubNav from "./SubNav";

import "../shared/layout.css";
// import _ from 'lodash'

class HomePage extends Component {
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
    const panels = [
      {
        key: `panel-0`,
        title: "Upcoming (2)",
        content: {
          content: (
            <div style={{ marginBottom: "20px" }}>
              <Segment className="pending-task-item">
                <Header floated="left" as="h5" style={{ marginTop: "5px" }}>
                  Planning: planned tasks
                  <Header.Subheader style={{ color: "red", marginTop: "2px" }}>
                    Due 22 May 2020
                  </Header.Subheader>
                </Header>
                <Header
                  floated="right"
                  as="h5"
                  textAlign="right"
                  style={{ color: "grey", marginTop: "5px" }}
                >
                  10 points
                  <Header.Subheader style={{ color: "red", marginTop: "2px" }}>
                    Overdue
                  </Header.Subheader>
                </Header>
              </Segment>
              <Segment className="pending-task-item">
                <Header floated="left" as="h5" style={{ marginTop: "5px" }}>
                  Client Acquisition: developing personas
                  <Header.Subheader
                    style={{ color: "green", marginTop: "2px" }}
                  >
                    Due 31 May 2020
                  </Header.Subheader>
                </Header>

                <Header
                  floated="right"
                  as="h5"
                  textAlign="right"
                  style={{ color: "grey", marginTop: "15px" }}
                >
                  10 points
                </Header>
              </Segment>
            </div>
          ),
        },
      },
      {
        key: `panel-1`,
        title: "Completed (3)",
        content: {
          content: (
            <div>
              <Segment className="completed-task-item">
                <Header floated="left" as="h5" style={{ marginTop: "6px" }}>
                  Planning: planned tasks
                </Header>
                <Header
                  icon="check"
                  floated="right"
                  as="h6"
                  textAlign="right"
                  style={{ color: "green", marginTop: "10px" }}
                />
              </Segment>

              <Segment className="completed-task-item">
                <Header floated="left" as="h5" style={{ marginTop: "6px" }}>
                  Client Acquisition: developing personas
                </Header>
                <Header
                  icon="check"
                  as="h6"
                  name="check"
                  textAlign="right"
                  floated="right"
                  style={{ color: "green", marginTop: "10px" }}
                />
              </Segment>

              <Segment className="completed-task-item">
                <Header floated="left" as="h5" style={{ marginTop: "6px" }}>
                  Client Acquisition: developing personas
                </Header>
                <Header
                  icon="check"
                  as="h6"
                  name="check"
                  textAlign="right"
                  floated="right"
                  style={{ color: "green", marginTop: "10px" }}
                />
              </Segment>
            </div>
          ),
        },
      },
    ];

    return (
      <Grid>
        <Grid.Row columns={3}>
          <Grid.Column floated="left" attached>
            <Nav name="home" />
          </Grid.Column>

          <Grid.Column floated="left" className="sub-nav" width={1}>
            <SubNav name="home/tasks" />
          </Grid.Column>

          <Grid.Column floated="left" className="main-panel" width={16}>
            <Grid.Row className="panel-header" fluid>
              <Header as="h2" content="Tasks Overview" dividing />
            </Grid.Row>

            <Grid.Row>
              <Accordion
                defaultActiveIndex={[0, 1]}
                panels={panels}
                exclusive={false}
              />
            </Grid.Row>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default HomePage;
