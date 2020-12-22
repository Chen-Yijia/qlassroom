import React, { Component } from "react";
import { Segment, Grid, Button, Icon, Header, Divider, Container } from "semantic-ui-react";
import Nav from "../../components/shared/Nav";
import SubNav from "./SubNav";
import ModalPlan from "./component/new-plan";
import ModalNewItem from "./component/add-item";

import "../shared/layout.css";
// import _ from 'lodash'

class PlanPage extends Component {
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
            <Nav name="home" />
          </Grid.Column>

          <Grid.Column floated="left" className="sub-nav" width={1}>
            <SubNav name="home/plan" />
          </Grid.Column>

          <Grid.Column floated="left" className="main-panel" width={16}>
            <Grid.Row className="panel-header" fluid>
              <Header as="h2" content="Planned Tasks" dividing />
              <ModalNewItem />
              {/* <Button icon labelPosition='left' className='add-new-item' style={{ marginBottom: "10px" }}>
                <Icon name='add' />
                  Add New Item
              </Button> */}
            </Grid.Row>

            <Grid.Row>
              <Segment className="weekly-task">
                <Header floated="left" as="h3" style={{ marginTop: "5px" }}>
                  Week 2
                </Header>
                <Header floated="left" as="h3" style={{ marginLeft: "20px", marginTop: "9px", fontSize: "14px" }}>
                  30/07/20 - 06/08/20
                </Header>
                {/* <div class='edit_plan'>
                  <Icon name="edit" fitted className='edit_plan' />
                </div> */}
                <ModalPlan />

                <Divider section />
                <Container textAlign='justified' className='planned_tasks'>
                  <Header as='h4'>Planned Tasks</Header>
                  <p>
                    (a) Outreach and engagement, that is, to organise clinics, events and talks, to engage Charities  <br />
                    (b) Client relationship and contact management, that is, managing the client’s needs and contracts
                  </p>
                </Container>
                <Container textAlign='justified' className='actual_work'>
                  <Header as='h4'>Actual Work Done</Header>
                  <p>
                    (a) Create the client persona
                  </p>
                </Container>
              </Segment>

              <Segment className="weekly-task">
                <Header floated="left" as="h3" style={{ marginTop: "5px" }}>
                  Week 1
                </Header>
                <Header floated="left" as="h3" style={{ marginLeft: "20px", marginTop: "9px", fontSize: "14px" }}>
                  22/07/20 - 29/07/20
                </Header>
                {/* <div class='edit_plan'>
                  <Icon name="edit" fitted className='edit_plan' />
                </div> */}
                <ModalPlan />
                <Divider section />
                <Container textAlign='justified' className='planned_tasks'>
                  <Header as='h4'>Planned Tasks</Header>
                  <p>
                    (a) Outreach and engagement, that is, to organise clinics, events and talks, to engage Charities  <br />
                    (b) Client relationship and contact management, that is, managing the client’s needs and contracts
                  </p>
                </Container>
                <Container textAlign='justified' className='actual_work'>
                  <Header as='h4'>Actual Work Done</Header>
                  <p>
                    (a) Create the client persona
                  </p>
                </Container>
              </Segment>
            </Grid.Row>
          </Grid.Column>
        </Grid.Row>
      </Grid >
    );
  }
}

export default PlanPage;
