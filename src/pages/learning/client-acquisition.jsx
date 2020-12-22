import React, { Component } from "react";
import { Segment, Grid, Header, Menu, Icon } from "semantic-ui-react";
import Nav from "../../components/shared/Nav";
import SubNav from "./SubNav";
import CustomerPersona from "./componentOne/persona";
import SalesProposal from "./componentOne/sales";
import ClientJourney from "./componentOne/journey";
import CriteriaOne from "./componentOne/criteriaOne";
import IntroOne from "./componentOne/intro";


import "../shared/layout.css";
// import _ from 'lodash'

class ClientAcquisitionPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: 'general-introduction',
      introComplete: true,
      personaComplete: false,
      proposalComplete: false,
      journeyComplete: true,
      criteriaComplete: false
    };
    this.handleItemClick = this.handleItemClick.bind(this);
    this.handleIntro = this.handleIntro.bind(this);
    this.handlePersona = this.handlePersona.bind(this);
    this.handleProposal = this.handleProposal.bind(this);
    this.handleJourney = this.handleJourney.bind(this);
    this.handleCriteria = this.handleCriteria.bind(this);
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  handleIntro = () => {
    this.setState(state => ({
      introComplete: !state.introComplete,
      // activeItem: 'customer-persona'
    }));
  }
  handlePersona = () => {
    this.setState(state => ({
      personaComplete: !state.personaComplete
    }));
  }
  handleProposal = () => {
    this.setState(state => ({
      proposalComplete: !state.proposalComplete
    }));
  }
  handleJourney = () => {
    this.setState(state => ({
      journeyComplete: !state.journeyComplete
    }));
  }
  handleCriteria = () => {
    this.setState(state => ({
      criteriaComplete: !state.criteriaComplete
    }));
  }


  render() {

    const { activeItem } = this.state

    function IntroIcon(props) {
      const introComplete = props.introComplete;
      if (introComplete === true) {
        return <Icon name='check' color='green' style={{ marginLeft: '3px' }} />;
      }
      if (introComplete === false) {
        return <Icon name='none' color='green' style={{ marginLeft: '3px' }} />;
      }
    }

    function PersonaIcon(props) {
      const personaComplete = props.personaComplete;
      if (personaComplete === true) {
        return <Icon name='check' color='green' style={{ marginLeft: '3px' }} />;
      }
      if (personaComplete === false) {
        return <Icon name='none' color='green' style={{ marginLeft: '3px' }} />;
      }
    }

    function ProposalIcon(props) {
      const proposalComplete = props.proposalComplete;
      if (proposalComplete === true) {
        return <Icon name='check' color='green' style={{ marginLeft: '3px' }} />;
      }
      if (proposalComplete === false) {
        return <Icon name='none' color='green' style={{ marginLeft: '3px' }} />;
      }
    }

    function JourneyIcon(props) {
      const journeyComplete = props.journeyComplete;
      if (journeyComplete === true) {
        return <Icon name='check' color='green' style={{ marginLeft: '3px' }} />;
      }
      if (journeyComplete === false) {
        return <Icon name='none' color='green' style={{ marginLeft: '3px' }} />;
      }
    }

    function CriteriaIcon(props) {
      const criteriaComplete = props.criteriaComplete;
      if (criteriaComplete === true) {
        return <Icon name='check' color='green' style={{ marginLeft: '3px' }} />;
      }
      if (criteriaComplete === false) {
        return <Icon name='none' color='green' style={{ marginLeft: '3px' }} />;
      }
    }


    function LearningPanel(props) {

      const activeItem = props.activeItem;
      const handleIntro = props.handleIntro;
      const handlePersona = props.handlePersona;
      const handleProposal = props.handleProposal;
      const handleJourney = props.handleJourney;
      const handleCriteria = props.handleCriteria;
      const introComplete = props.introComplete;
      const personaComplete = props.personaComplete;
      const proposalComplete = props.proposalComplete;
      const journeyComplete = props.journeyComplete;
      const criteriaComplete = props.criteriaComplete;

      if (activeItem === 'general-introduction') {
        return <IntroOne handleClick={handleIntro} complete={introComplete} />;
      }
      if (activeItem === 'customer-persona') {
        return <CustomerPersona handleClick={handlePersona} complete={personaComplete} />;
      }
      if (activeItem === 'sales-proposal') {
        return <SalesProposal handleClick={handleProposal} complete={proposalComplete} />;
      }
      if (activeItem === 'client-journey') {
        return <ClientJourney handleClick={handleJourney} complete={journeyComplete} />;
      }
      if (activeItem === 'measurement-criteria') {
        return <CriteriaOne handleClick={handleCriteria} complete={criteriaComplete} />;
      }
    }

    return (
      <Grid>
        <Grid.Row columns={3}>
          <Grid.Column floated="left" attached>
            <Nav name="learning" />
          </Grid.Column>

          <Grid.Column floated="left" className="sub-nav" width={1}>
            <SubNav name="learning/client-acquisition" />
          </Grid.Column>

          <Grid.Column floated="left" className="main-panel" width={16}>
            <Grid.Row className="panel-header" fluid>
              <Header as="h2" content="Client Acquisition" dividing />
            </Grid.Row>

            <Grid.Row>

              <Segment className="learning-panel" >
                <Menu attached='top' tabular>
                  <Menu.Item
                    name='general-introduction'
                    active={activeItem === 'general-introduction'}
                    onClick={this.handleItemClick}
                  >
                    General Introduction
                    <IntroIcon introComplete={this.state.introComplete} />
                  </Menu.Item>

                  <Menu.Item
                    name='customer-persona'
                    active={activeItem === 'customer-persona'}
                    onClick={this.handleItemClick}
                  >
                    Customer Persona
                    <PersonaIcon personaComplete={this.state.personaComplete} />
                  </Menu.Item>
                  <Menu.Item
                    name='sales-proposal'
                    active={activeItem === 'sales-proposal'}
                    onClick={this.handleItemClick}
                  >
                    Sales Proposal
                     <ProposalIcon proposalComplete={this.state.proposalComplete} />
                  </Menu.Item>
                  <Menu.Item
                    name='client-journey'
                    active={activeItem === 'client-journey'}
                    onClick={this.handleItemClick}
                  >
                    Client Journey
                     <JourneyIcon journeyComplete={this.state.journeyComplete} />
                  </Menu.Item>
                  <Menu.Item
                    name='measurement-criteria'
                    active={activeItem === 'measurement-criteria'}
                    onClick={this.handleItemClick}
                  >
                    Measurement Criteria
                     <CriteriaIcon criteriaComplete={this.state.criteriaComplete} />
                  </Menu.Item>
                </Menu>

                <LearningPanel
                  activeItem={activeItem}
                  handleIntro={this.handleIntro}
                  handlePersona={this.handlePersona}
                  handleProposal={this.handleProposal}
                  handleJourney={this.handleJourney}
                  handleCriteria={this.handleCriteria}
                  introComplete={this.state.introComplete}
                  personaComplete={this.state.personaComplete}
                  proposalComplete={this.state.proposalComplete}
                  journeyComplete={this.state.journeyComplete}
                  criteriaComplete={this.state.criteriaComplete}
                />

              </Segment>
            </Grid.Row>
          </Grid.Column>
        </Grid.Row>
      </Grid >
    );
  }
}

export default ClientAcquisitionPage;
