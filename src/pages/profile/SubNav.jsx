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
          Profile
        </Menu.Item>

        <Menu.Item
          name="profile/info"
          active={activeItem === "profile/info"}
          onClick={this.handleItemClick}
        >
          Programme Information
        </Menu.Item>

      </Menu>
    );
  }
}

export default withRouter(SubNav);
