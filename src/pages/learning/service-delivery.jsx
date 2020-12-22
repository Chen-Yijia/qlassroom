import React, { Component } from "react";
import { Segment, Grid, Header, Menu, Icon } from "semantic-ui-react";
import Nav from "../../components/shared/Nav";
import SubNav from "./SubNav";
import ProjectManage from "./componentThree/peoject";
import PartnerManage from "./componentThree/partner";
import ChangeManage from "./componentThree/change";
import ClientManage from "./componentThree/client";
import CriteriaThree from "./componentThree/criteriaThree";
import IntroThree from "./componentThree/intro";


import "../shared/layout.css";
// import _ from 'lodash'

class ServiceDeliveryPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: 'general-introduction',
      introComplete: true,
      projectComplete: true,
      partnerComplete: false,
      changeComplete: false,
      clientComplete: true,
      criteriaComplete: false
    };
    this.handleItemClick = this.handleItemClick.bind(this);
    this.handleIntro = this.handleIntro.bind(this);
    this.handleProject = this.handleProject.bind(this);
    this.handlePartner = this.handlePartner.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleClient = this.handleClient.bind(this);
    this.handleCriteria = this.handleCriteria.bind(this);
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  handleIntro = () => {
    this.setState(state => ({
      introComplete: !state.introComplete,
      // activeItem: 'project-management'
    }));
  }
  handleProject = () => {
    this.setState(state => ({
      projectComplete: !state.projectComplete
    }));
  }
  handlePartner = () => {
    this.setState(state => ({
      partnerComplete: !state.partnerComplete
    }));
  }
  handleChange = () => {
    this.setState(state => ({
      changeComplete: !state.changeComplete
    }));
  }
  handleClient = () => {
    this.setState(state => ({
      clientComplete: !state.clientComplete
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

    function ProjectIcon(props) {
      const projectComplete = props.projectComplete;
      if (projectComplete === true) {
        return <Icon name='check' color='green' style={{ marginLeft: '3px' }} />;
      }
      if (projectComplete === false) {
        return <Icon name='none' color='green' style={{ marginLeft: '3px' }} />;
      }
    }

    function PartnerIcon(props) {
      const partnerComplete = props.partnerComplete;
      if (partnerComplete === true) {
        return <Icon name='check' color='green' style={{ marginLeft: '3px' }} />;
      }
      if (partnerComplete === false) {
        return <Icon name='none' color='green' style={{ marginLeft: '3px' }} />;
      }
    }

    function ChangeIcon(props) {
      const changeComplete = props.changeComplete;
      if (changeComplete === true) {
        return <Icon name='check' color='green' style={{ marginLeft: '3px' }} />;
      }
      if (changeComplete === false) {
        return <Icon name='none' color='green' style={{ marginLeft: '3px' }} />;
      }
    }

    function ClientIcon(props) {
      const clientComplete = props.clientComplete;
      if (clientComplete === true) {
        return <Icon name='check' color='green' style={{ marginLeft: '3px' }} />;
      }
      if (clientComplete === false) {
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
      const handleProject = props.handleProject;
      const handlePartner = props.handlePartner;
      const handleChange = props.handleChange;
      const handleClient = props.handleClient;
      const handleCriteria = props.handleCriteria;
      const introComplete = props.introComplete;
      const projectComplete = props.projectComplete;
      const partnerComplete = props.partnerComplete;
      const changeComplete = props.changeComplete;
      const clientComplete = props.clientComplete;
      const criteriaComplete = props.criteriaComplete;

      if (activeItem === 'general-introduction') {
        return <IntroThree handleClick={handleIntro} complete={introComplete} />;
      }
      if (activeItem === 'project-management') {
        return <ProjectManage handleClick={handleProject} complete={projectComplete} />;
      }
      if (activeItem === 'partner-management') {
        return <PartnerManage handleClick={handlePartner} complete={partnerComplete} />;
      }
      if (activeItem === 'change-management') {
        return <ChangeManage handleClick={handleChange} complete={changeComplete} />;
      }
      if (activeItem === 'client-management') {
        return <ClientManage handleClick={handleClient} complete={clientComplete} />;
      }
      if (activeItem === 'measurement-criteria') {
        return <CriteriaThree handleClick={handleCriteria} complete={criteriaComplete} />;
      }
    }

    return (
      <Grid>
        <Grid.Row columns={3}>
          <Grid.Column floated="left" attached>
            <Nav name="learning" />
          </Grid.Column>

          <Grid.Column floated="left" className="sub-nav" width={1}>
            <SubNav name="learning/service-delivery" />
          </Grid.Column>

          <Grid.Column floated="left" className="main-panel" width={16}>
            <Grid.Row className="panel-header" fluid>
              <Header as="h2" content="Service Delivery" dividing />
            </Grid.Row>

            <Grid.Row>

              <Segment className="learning-panel">
                <Menu attached='top' tabular>
                  <Menu.Item
                    name='general-introduction'
                    active={activeItem === 'general-introduction'}
                    onClick={this.handleItemClick}
                    style={{ fontSize: '12px', marginRight: '-3px', marginLeft: '-3px' }}
                  >
                    General Introduction
                    <IntroIcon introComplete={this.state.introComplete} />
                  </Menu.Item>

                  <Menu.Item
                    name='project-management'
                    active={activeItem === 'project-management'}
                    onClick={this.handleItemClick}
                    style={{ fontSize: '12px', marginRight: '-3px', marginLeft: '-3px' }}
                  >
                    Project Management
                    <ProjectIcon projectComplete={this.state.projectComplete} />
                  </Menu.Item>
                  <Menu.Item
                    name='partner-management'
                    active={activeItem === 'partner-management'}
                    onClick={this.handleItemClick}
                    style={{ fontSize: '12px', marginRight: '-3px', marginLeft: '-3px' }}
                  >
                    Partnership/vendor Management
                    <PartnerIcon partnerComplete={this.state.partnerComplete} />
                  </Menu.Item>
                  <Menu.Item
                    name='change-management'
                    active={activeItem === 'change-management'}
                    onClick={this.handleItemClick}
                    style={{ fontSize: '12px', marginRight: '-3px', marginLeft: '-3px' }}
                  >
                    Change Management
                    <ChangeIcon changeComplete={this.state.changeComplete} />
                  </Menu.Item>
                  <Menu.Item
                    name='client-management'
                    active={activeItem === 'client-management'}
                    onClick={this.handleItemClick}
                    style={{ fontSize: '12px', marginRight: '-3px', marginLeft: '-3px' }}
                  >
                    Client Relationship Management
                    <ClientIcon clientComplete={this.state.clientComplete} />
                  </Menu.Item>
                  <Menu.Item
                    name='measurement-criteria'
                    active={activeItem === 'measurement-criteria'}
                    onClick={this.handleItemClick}
                    style={{ fontSize: '12px', marginRight: '-3px', marginLeft: '-3px' }}
                  >
                    Measuerment Criteria
                    <CriteriaIcon criteriaComplete={this.state.criteriaComplete} />
                  </Menu.Item>
                </Menu>

                <LearningPanel
                  activeItem={activeItem}
                  handleIntro={this.handleIntro}
                  handleProject={this.handleProject}
                  handlePartner={this.handlePartner}
                  handleChange={this.handleChange}
                  handleClient={this.handleClient}
                  handleCriteria={this.handleCriteria}
                  introComplete={this.state.introComplete}
                  projectComplete={this.state.projectComplete}
                  partnerComplete={this.state.partnerComplete}
                  changeComplete={this.state.changeComplete}
                  clientComplete={this.state.clientComplete}
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

export default ServiceDeliveryPage;
