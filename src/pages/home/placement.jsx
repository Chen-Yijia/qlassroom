import React, { Component } from "react";
import { Grid, Step, Header } from "semantic-ui-react";
import Nav from "../../components/shared/Nav";
import SubNav from "./SubNav";
import ProgrammeInfo from "./component/introduction";
import PersonalInfo from "./component/specific";
import InfoDisplay from "./component/display";

import "../shared/layout.css";
// import _ from 'lodash'

class PlacementPage extends Component {
  constructor(props) {
    super(props);
    this.state = { activeStep: 0 };
    this.handleClick = this.handleClick.bind(this);
    this.handleStep = this.handleStep.bind(this);
  }

  handleClick = (id) => {
    // this.setState({ activeItem: name })
    // console.log(id)
    console.log(id);
  };

  handleStep = () => {
    this.setState((state) => ({
      activeStep: state.activeStep + 1
    }));
  }

  handleEdit = () => {
    this.setState((state) => ({
      activeStep: state.activeStep - 1
    }));
  }

  render() {

    const { activeStep } = this.state;

    function Mainpanel(props) {
      const activeStep = props.activeStep;
      const handleStep = props.handleStep;
      const handleEdit = props.handleEdit;

      if (activeStep === 0) {
        return <ProgrammeInfo activeStep={activeStep} handleStep={handleStep} />;
      }
      if (activeStep === 1) {
        return <PersonalInfo activeStep={activeStep} handleStep={handleStep} />;
      }
      if (activeStep === 2) {
        return <InfoDisplay activeStep={activeStep} handleEdit={handleEdit} />;
      }
    }

    const steps = [
      {
        key: 'programme',
        completed: activeStep !== 0,
        active: activeStep === 0,
        icon: 'info',
        title: 'Programme Introduction',
        description: 'Read through the introduction',
      },
      {
        key: 'personal',
        completed: activeStep > 1,
        active: activeStep === 1,
        disabled: activeStep === 0,
        icon: 'user',
        title: 'Specific Information',
        description: 'Fill in personal information',
      }
    ]

    return (
      <Grid>
        <Grid.Row columns={3}>
          <Grid.Column floated="left" attached>
            <Nav name="home" />
          </Grid.Column>

          <Grid.Column floated="left" className="sub-nav" width={1}>
            <SubNav name="home/placement" />
          </Grid.Column>

          <Grid.Column floated="left" className="main-panel" width={16}>
            <Grid.Row className="panel-header" fluid>
              <Header as="h2" content="Programme Information" dividing />
            </Grid.Row>

            <Grid.Row>
              <div className='step-row'>
                <Step.Group items={steps} />

                {/* <Step.Group>
                  <Step completed={activeStep !== 0} active={activeStep === 0}>
                    <Icon name='info' />
                    <Step.Content>
                      <Step.Title>Programme Introduction</Step.Title>
                      <Step.Description>Read through the introduction</Step.Description>
                    </Step.Content>
                  </Step>

                  <Step completed={activeStep > 1} active={activeStep === 1} disabled={activeStep === 0}>
                    <Icon name='user' />
                    <Step.Content>
                      <Step.Title>Specific Information</Step.Title>
                      <Step.Description>Fill in personal information</Step.Description>
                    </Step.Content>
                  </Step>
                </Step.Group> */}


              </div>
            </Grid.Row>

            <Grid.Row>
              <Mainpanel activeStep={activeStep} handleStep={this.handleStep} handleEdit={this.handleEdit} />
            </Grid.Row>

          </Grid.Column>
        </Grid.Row>
      </Grid >
    );
  }
}

export default PlacementPage;