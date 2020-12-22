import React, { Component } from "react";
import { Menu, Icon } from "semantic-ui-react";
import { withRouter } from "react-router-dom";

import "./nav.css";

class Nav extends Component {
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
      <Menu
        className="sidenav"
        color="black"
        icon="labeled"
        size="mini"
        inverted
        attached
        vertical
        secondary
        pointing
      >
        <Menu.Item
          name="home"
          active={activeItem === "home"}
          onClick={this.handleItemClick}
        >
          <Icon name="home" />
          Home
        </Menu.Item>

        <Menu.Item
          name="learning"
          active={activeItem === "learning"}
          onClick={this.handleItemClick}
        >
          <Icon name="book" />
          Learning
        </Menu.Item>

        <Menu.Item
          name="report"
          active={activeItem === "report"}
          onClick={this.handleItemClick}
        >
          <Icon name="edit" />
          Report
        </Menu.Item>

        <Menu.Menu
          className="bottomnav"
          style={{ position: "fixed", bottom: "10px", marginLeft: "5px" }}
        >
          <Menu.Item name="profile" active={activeItem === "profile"} onClick={this.handleItemClick}>
            <Icon name="user" />
            Profile
          </Menu.Item>

          <Menu.Item name="logout" onClick={this.handleItemClick}>
            <Icon
              name="sign-out"
              style={{ webkitTransform: "scaleX(-1)", transform: "scaleX(-1)" }}
            />
            Sign out
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    );
  }
}

export default withRouter(Nav);
