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
          Report
        </Menu.Item>

        <Menu.Item
          name="report/student-biweekly"
          active={activeItem === "report/student-biweekly"}
          onClick={this.handleItemClick}
        >
          Biweekly Report
        </Menu.Item>

        <Menu.Item
          name="report/industrial-supervisor"
          active={activeItem === "report/industrial-supervisor"}
          onClick={this.handleItemClick}
        >
          Industrial Review
        </Menu.Item>

        <Menu.Item
          name="report/academic-supervisor"
          active={activeItem === "report/academic-supervisor"}
          onClick={this.handleItemClick}
        >
          Academic Review
        </Menu.Item>

      </Menu>
    );
  }
}

export default withRouter(SubNav);
