import React, { Component } from "react";
import 'react-quill/dist/quill.snow.css';
import { Segment, Grid, Header, Menu } from "semantic-ui-react";
import Nav from "../../components/shared/Nav";
import SubNav from "./SubNav";
// import Editor from "./componentFour/editor";
import PopupTask from "./componentFour/pop";
import IntroFour from "./componentFour/intro";
import Description from "./componentFour/description";
import Process from "./componentFour/process";
import Improvement from "./componentFour/improvement";
import Innovation from "./componentFour/innovation";
import Management from "./componentFour/management";
import Report from "./componentFour/report";
import Empathise from "./componentFour/empathise";
import Risk from "./componentFour/risk";
import Test from "./componentFour/test";
import Evaluate from "./componentFour/evaluate";

import "../shared/layout.css";

// import _ from 'lodash'

class AgilePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: 1,
      bottonOneCompleted: false,
      bottonTwoCompleted: false,
      bottonThreeCompleted: false,
      bottonFourCompleted: false,
      bottonFiveCompleted: false,
      bottonSixCompleted: false,
      bottonSevenCompleted: false,
      bottonEightCompleted: false,
      bottonNineCompleted: false,
      bottonTenCompleted: false,
    };
    this.handleItemClick = this.handleItemClick.bind(this);
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })



  render() {

    const { activeItem } = this.state

    function LearningPanel(props) {

      const activeItem = props.activeItem;

      if (activeItem === 1) {
        return <IntroFour />;
      }
      if (activeItem === 2) {
        return <Description />;
      }
      if (activeItem === 3) {
        return <Process />;
      }
      if (activeItem === 4) {
        return <Improvement />;
      }
      if (activeItem === 5) {
        return <Innovation />;
      }
      if (activeItem === 6) {
        return <Management />;
      }
      if (activeItem === 7) {
        return <Report />;
      }
      if (activeItem === 8) {
        return <Empathise />;
      }
      if (activeItem === 9) {
        return <Risk />;
      }
      if (activeItem === 10) {
        return <Test />;
      }
      if (activeItem === 11) {
        return <Evaluate />;
      }
    }


    return (
      <Grid>
        <Grid.Row columns={3}>
          <Grid.Column floated="left" attached>
            <Nav name="learning" />
          </Grid.Column>

          <Grid.Column floated="left" className="sub-nav" width={1}>
            <SubNav name="learning/agile" />
          </Grid.Column>

          <Grid.Column floated="left" className="main-panel" width={16}>
            <Grid.Row className="panel-header" fluid>
              <Header as="h2" content="Agile Problem-Solving and Innovation" dividing />
            </Grid.Row>

            {/* Progress Bar */}
            <Grid.Row>
              <Segment>
                <Menu attached='top' tabular>
                  <PopupTask activeItem={activeItem} handleItemClick={this.handleItemClick} />
                </Menu>

                <LearningPanel activeItem={activeItem} />

              </Segment>
            </Grid.Row>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default AgilePage;
