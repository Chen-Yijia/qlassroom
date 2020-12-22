import React, { Component } from "react";
import { Segment, Grid, Header, Menu, Icon } from "semantic-ui-react";
import Nav from "../../components/shared/Nav";
import SubNav from "./SubNav";
import General from "./componentTwo/general";
import ManagedServices from "./componentTwo/managed";
import Human from "./componentTwo/human";
import IntroTwo from "./componentTwo/intro";
import Accounting from "./componentTwo/accounting";
import Donation from "./componentTwo/donation";
import Volunteer from "./componentTwo/volunteer";
import Recommendation from "./componentTwo/recommendations";
import CriteriaTwo from "./componentTwo/criteriaTwo";

import "../shared/layout.css";
// import _ from 'lodash'

class SolutionsSupportPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: 'introduction',
      introComplete: true,
      generalComplete: false,
      humanComplete: false,
      accountingComplete: true,
      donationComplete: false,
      volunteerComplete: false,
      managedComplete: false,
      recommendationComplete: false,
      criteriaComplete: false
    };
    this.handleItemClick = this.handleItemClick.bind(this);
    this.handleIntro = this.handleIntro.bind(this);
    this.handleGeneral = this.handleGeneral.bind(this);
    this.handleHuman = this.handleHuman.bind(this);
    this.handleAccounting = this.handleAccounting.bind(this);
    this.handleDonation = this.handleDonation.bind(this);
    this.handleVolunteer = this.handleVolunteer.bind(this);
    this.handleManaged = this.handleManaged.bind(this);
    this.handleRecommendation = this.handleRecommendation.bind(this);
    this.handleCriteria = this.handleCriteria.bind(this);
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  handleIntro = () => {
    this.setState(state => ({
      introComplete: !state.introComplete,
      // activeItem: 'general-services'
    }));
  }
  handleGeneral = () => {
    this.setState(state => ({
      generalComplete: !state.generalComplete
    }));
  }
  handleHuman = () => {
    this.setState(state => ({
      humanComplete: !state.humanComplete
    }));
  }
  handleAccounting = () => {
    this.setState(state => ({
      accountingComplete: !state.accountingComplete
    }));
  }
  handleDonation = () => {
    this.setState(state => ({
      donationComplete: !state.donationComplete
    }));
  }
  handleVolunteer = () => {
    this.setState(state => ({
      volunteerComplete: !state.volunteerComplete
    }));
  }
  handleManaged = () => {
    this.setState(state => ({
      managedComplete: !state.managedComplete
    }));
  }
  handleRecommendation = () => {
    this.setState(state => ({
      recommendationComplete: !state.recommendationComplete
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

    function GeneralIcon(props) {
      const generalComplete = props.generalComplete;
      if (generalComplete === true) {
        return <Icon name='check' color='green' style={{ marginLeft: '3px' }} />;
      }
      if (generalComplete === false) {
        return <Icon name='none' color='green' style={{ marginLeft: '3px' }} />;
      }
    }

    function HumanIcon(props) {
      const humanComplete = props.humanComplete;
      if (humanComplete === true) {
        return <Icon name='check' color='green' style={{ marginLeft: '3px' }} />;
      }
      if (humanComplete === false) {
        return <Icon name='none' color='green' style={{ marginLeft: '3px' }} />;
      }
    }

    function AccountingIcon(props) {
      const accountingComplete = props.accountingComplete;
      if (accountingComplete === true) {
        return <Icon name='check' color='green' style={{ marginLeft: '3px' }} />;
      }
      if (accountingComplete === false) {
        return <Icon name='none' color='green' style={{ marginLeft: '3px' }} />;
      }
    }

    function DonationIcon(props) {
      const donationComplete = props.donationComplete;
      if (donationComplete === true) {
        return <Icon name='check' color='green' style={{ marginLeft: '3px' }} />;
      }
      if (donationComplete === false) {
        return <Icon name='none' color='green' style={{ marginLeft: '3px' }} />;
      }
    }

    function VolunteerIcon(props) {
      const volunteerComplete = props.volunteerComplete;
      if (volunteerComplete === true) {
        return <Icon name='check' color='green' style={{ marginLeft: '3px' }} />;
      }
      if (volunteerComplete === false) {
        return <Icon name='none' color='green' style={{ marginLeft: '3px' }} />;
      }
    }

    function ManagedIcon(props) {
      const managedComplete = props.managedComplete;
      if (managedComplete === true) {
        return <Icon name='check' color='green' style={{ marginLeft: '3px' }} />;
      }
      if (managedComplete === false) {
        return <Icon name='none' color='green' style={{ marginLeft: '3px' }} />;
      }
    }

    function RecommendationIcon(props) {
      const recommendationComplete = props.recommendationComplete;
      if (recommendationComplete === true) {
        return <Icon name='check' color='green' style={{ marginLeft: '3px' }} />;
      }
      if (recommendationComplete === false) {
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
      const handleGeneral = props.handleGeneral;
      const handleHuman = props.handleHuman;
      const handleAccounting = props.handleAccounting;
      const handleDonation = props.handleDonation;
      const handleVolunteer = props.handleVolunteer;
      const handleManaged = props.handleManaged;
      const handleRecommendation = props.handleRecommendation;
      const handleCriteria = props.handleCriteria;
      const introComplete = props.introComplete;
      const generalComplete = props.generalComplete;
      const humanComplete = props.humanComplete;
      const accountingComplete = props.accountingComplete;
      const donationComplete = props.donationComplete;
      const volunteerComplete = props.volunteerComplete;
      const managedComplete = props.managedComplete;
      const recommendationComplete = props.recommendationComplete;
      const criteriaComplete = props.criteriaComplete;

      if (activeItem === 'introduction') {
        // return <IntroTwo />;
        return <IntroTwo handleClick={handleIntro} complete={introComplete} />;
      }
      if (activeItem === 'general-services') {
        // return <General />;
        return <General handleClick={handleGeneral} complete={generalComplete} />;
      }
      if (activeItem === 'human-resources') {
        // return <Human />;
        return <Human handleClick={handleHuman} complete={humanComplete} />;
      }
      if (activeItem === 'accounting') {
        // return <Accounting />;
        return <Accounting handleClick={handleAccounting} complete={accountingComplete} />;
      }
      if (activeItem === 'donation-services') {
        // return <Donation />;
        return <Donation handleClick={handleDonation} complete={donationComplete} />;
      }
      if (activeItem === 'volunteer-services') {
        // return <Volunteer />;
        return <Volunteer handleClick={handleVolunteer} complete={volunteerComplete} />;
      }
      if (activeItem === 'managed-services') {
        // return <ManagedServices />;
        return <ManagedServices handleClick={handleManaged} complete={managedComplete} />;
      }
      if (activeItem === 'recommendations') {
        // return <Recommendation />;
        return <Recommendation handleClick={handleRecommendation} complete={recommendationComplete} />;
      }
      if (activeItem === 'measurement-criteria') {
        // return <CriteriaTwo />;
        return <CriteriaTwo handleClick={handleCriteria} complete={criteriaComplete} />;
      }
    }

    return (
      <Grid>
        <Grid.Row columns={3}>
          <Grid.Column floated="left" attached>
            <Nav name="learning" />
          </Grid.Column>

          <Grid.Column floated="left" className="sub-nav" width={1}>
            <SubNav name="learning/solutions-support" />
          </Grid.Column>

          <Grid.Column floated="left" className="main-panel" width={16}>
            <Grid.Row className="panel-header" fluid>
              <Header as="h2" content="Solutions and Support" dividing />
            </Grid.Row>

            <Grid.Row>

              <Segment className="learning-panel">
                <Menu attached='top' tabular className='solutions-support-menu'>
                  <Menu.Item
                    name='introduction'
                    active={activeItem === 'introduction'}
                    onClick={this.handleItemClick}
                  >
                    Introduction
                    <IntroIcon introComplete={this.state.introComplete} />
                  </Menu.Item>
                  <Menu.Item
                    name='general-services'
                    active={activeItem === 'general-services'}
                    onClick={this.handleItemClick}
                  >
                    General Services
                    <GeneralIcon generalComplete={this.state.generalComplete} />
                  </Menu.Item>
                  <Menu.Item
                    name='human-resources'
                    active={activeItem === 'human-resources'}
                    onClick={this.handleItemClick}
                  >
                    Human Services
                    <HumanIcon humanComplete={this.state.humanComplete} />
                  </Menu.Item>
                  <Menu.Item
                    name='accounting'
                    active={activeItem === 'accounting'}
                    onClick={this.handleItemClick}
                  >
                    Accounting
                    <AccountingIcon accountingComplete={this.state.accountingComplete} />
                  </Menu.Item>
                  <Menu.Item
                    name='donation-services'
                    active={activeItem === 'donation-services'}
                    onClick={this.handleItemClick}
                  >
                    Donation Services
                    <DonationIcon donationComplete={this.state.donationComplete} />
                  </Menu.Item>
                  <Menu.Item
                    name='volunteer-services'
                    active={activeItem === 'volunteer-services'}
                    onClick={this.handleItemClick}
                  >
                    Volunteer Services
                    <VolunteerIcon volunteerComplete={this.state.volunteerComplete} />
                  </Menu.Item>
                  <Menu.Item
                    name='managed-services'
                    active={activeItem === 'managed-services'}
                    onClick={this.handleItemClick}
                  >
                    Managed Services
                    <ManagedIcon managedComplete={this.state.managedComplete} />
                  </Menu.Item>
                  <Menu.Item
                    name='recommendations'
                    active={activeItem === 'recommendations'}
                    onClick={this.handleItemClick}
                  >
                    Recommendations
                    <RecommendationIcon recommendationComplete={this.state.recommendationComplete} />
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

                {/* <LearningPanel activeItem={activeItem} /> */}
                <LearningPanel
                  activeItem={activeItem}
                  handleIntro={this.handleIntro}
                  handleHuman={this.handleHuman}
                  handleGeneral={this.handleGeneral}
                  handleAccounting={this.handleAccounting}
                  handleDonation={this.handleDonation}
                  handleVolunteer={this.handleVolunteer}
                  handleManaged={this.handleManaged}
                  handleRecommendation={this.handleRecommendation}
                  handleCriteria={this.handleCriteria}
                  introComplete={this.state.introComplete}
                  generalComplete={this.state.generalComplete}
                  humanComplete={this.state.humanComplete}
                  accountingComplete={this.state.accountingComplete}
                  donationComplete={this.state.donationComplete}
                  volunteerComplete={this.state.volunteerComplete}
                  managedComplete={this.state.managedComplete}
                  criteriaComplete={this.state.criteriaComplete}
                  recommendationComplete={this.state.recommendationComplete}
                />



              </Segment>
            </Grid.Row>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default SolutionsSupportPage;
