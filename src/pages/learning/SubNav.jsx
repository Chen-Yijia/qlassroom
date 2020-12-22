import React, { Component } from "react";
import { Menu } from "semantic-ui-react";
import { withRouter } from "react-router-dom";

import "./sub-nav.css";

class SubNav extends Component {
  constructor(props) {
    super(props);
    this.state = { activeItem: props.name };
    this.handleItemClick = this.handleItemClick.bind(this);
  }

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name });
    this.props.history.push(`/${name}`);
  };

  render() {
    const { activeItem } = this.state;

    return (
      <Menu className="sub-nav" size="medium" attached vertical>
        <Menu.Item header as="h3">
          Learning
        </Menu.Item>

        <Menu.Item
          name="learning/client-acquisition"
          active={activeItem === "learning/client-acquisition"}
          onClick={this.handleItemClick}
        >
          Client Acquisition
        </Menu.Item>

        <Menu.Item
          name="learning/solutions-support"
          active={activeItem === "learning/solutions-support"}
          onClick={this.handleItemClick}
        >
          Solutions and Support
        </Menu.Item>

        <Menu.Item
          name="learning/service-delivery"
          active={activeItem === "learning/service-delivery"}
          onClick={this.handleItemClick}
        >
          Service Delivery
        </Menu.Item>

        <Menu.Item
          name="learning/agile"
          active={activeItem === "learning/agile"}
          onClick={this.handleItemClick}
        >
          Agile Problem-Solving and Innovation 
        </Menu.Item>
      </Menu>
    );
  }
}

export default withRouter(SubNav);
