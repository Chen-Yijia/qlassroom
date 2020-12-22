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
    this.props.history.push(`/${name}`)
  };

  render() {
    const { activeItem } = this.state;

    return (
      <Menu className="sub-nav" size="medium" attached vertical>
        <Menu.Item header as="h3">
          Home
        </Menu.Item>

        {/* <Menu.Item
          name="home/tasks"
          active={activeItem === "home/tasks"}
          onClick={this.handleItemClick}
        >
          Tasks Overview
        </Menu.Item> */}

        <Menu.Item
          name="home/placement"
          active={activeItem === "home/placement"}
          onClick={this.handleItemClick}
        >
          Placement Planning
        </Menu.Item>

        <Menu.Item
          name="home/plan"
          active={activeItem === "home/plan"}
          onClick={this.handleItemClick}
        >
          Planned Tasks
        </Menu.Item>
      </Menu>
    );
  }
}

export default withRouter(SubNav);
