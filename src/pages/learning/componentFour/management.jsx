import React, { Component } from "react";
import { Segment, Header, Form, List } from "semantic-ui-react";
import Editor from "./editor";

import "../../shared/layout.css";
// import _ from 'lodash'

class Management extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick = () => {
        // this.setState({ activeItem: name })
        // console.log(id)
        this.props.handleClick();
    };

    render() {

        return (

            <Segment>
                <Header floated="left" as="h3" style={{ marginTop: "6px" }} dividing>
                    Use lean management such as a Fish-Bone Diagrams to elaborate on the issues surrounding the problem.
                </Header>

                <p style={{ marginTop: "48px", fontSize: "15px" }}>
                    Use A3 thinking to understand the problem: see extract of article below that was adapted from the web on 21.5.2020. <br />
                  Extract from: <a href='https://kanbanize.com/lean-management/improvement/a3-problem-solving  ' target='_blank'>https://kanbanize.com/lean-management/improvement/a3-problem-solving  </a>https://kanbanize.com/lean-management/improvement/a3-problem-solving
                </p>
                <Header floated="left" as="h4" style={{ marginTop: "6px" }} dividing>
                    What is A3 Thinking?
                </Header>

                <p style={{ marginTop: "60px", fontSize: "15px" }}>
                    First of all, let’s briefly touch upon the mindset that A3 thinking aims to develop. It can be summarized in 7 elements:
                </p>
                <List ordered style={{ marginLeft: "40px", fontSize: "15px" }}>
                    <List.Item>
                        Logical Thinking – A3 represents a step-based thinking process.
                  </List.Item>
                    <List.Item>
                        Presenting information in an objective way – there are no hidden agendas here.
                  </List.Item>
                    <List.Item>
                        Results and Processes – sharing what end results were achieved as well as the means of achieving them.
                  </List.Item>
                    <List.Item>
                        Sharing only essential information and putting it into a visual format whenever possible.
                  </List.Item>
                    <List.Item>
                        Whatever actions are taken, they must be aligned with the company’s strategy and objectives.
                  </List.Item>
                    <List.Item>
                        The focus is on developing a consistent perspective that can be adapted across the entire organization.
                  </List.Item>
                    <List.Item>
                        The focus is on developing a consistent perspective that can be adapted across the entire organization.
                  </List.Item>
                </List>
                <Header floated="left" as="h4" style={{ marginTop: "6px" }} dividing>
                    Origin of the A3 Problem-Solving Tool
                </Header>

                <p style={{ marginTop: "60px", fontSize: "15px" }}>
                    The A3 report is one of the many Lean management tools, developed as part of the Toyota Production System (TPS).
                </p>
                <p style={{ fontSize: "15px" }}>
                    There isn’t a single inventor of the A3 reporting method. In fact, Isao Kato (former manager at Toyota) describes it as a hybrid between the PDCA cycle and Toyota’s philosophy to make things visible.
                </p>
                <p style={{ fontSize: "15px" }}>
                    There is also a legend that Taiichi Ohno often refused to read further than the first page of any written report. This is why the A3 is a one-page report.
                    The name A3 simply comes from the European A3 paper size corresponding to 11-inches by 17-inches or 29.7cm x 42cm.

                </p>
                <p style={{ fontSize: "15px" }}>
                    The A3 thinking played a major role in Toyota’s commercial success. Consequently, it became a widespread tool, now used in various industries.
                </p>
                <p style={{ fontSize: "15px" }}>
                    This is why the whole organization should be familiar with the concept of lean thinking and be prepared to assists at any time. Sometimes this is challenging, but it can show how flexible an organization really is.
                </p>
                <p style={{ fontSize: "15px" }}>
                    At the end of the day, the active communication between all parties involved is crucial for the success of any A3 project.
                </p>

                <Header floated="left" as="h4" style={{ marginTop: "6px" }} dividing>
                    The A3 Report
                </Header>

                <p style={{ marginTop: "60px", fontSize: "15px" }}>
                    The A3 report is a single-page document, which reflects the results of the whole process. Usually, it contains seven steps, but it may also have other variations. Below you can find an A3 report example which most often will include the following steps:
                </p>
                <List bulleted style={{ marginLeft: "40px", fontSize: "15px" }}>
                    <List.Item>
                        Background/Clarify the problem
                  </List.Item>
                    <List.Item>
                        Current situation
                  </List.Item>
                    <List.Item>
                        Set targets/goals
                  </List.Item>
                    <List.Item>
                        Root cause analysis
                  </List.Item>
                    <List.Item>
                        Countermeasures
                  </List.Item>
                    <List.Item>
                        Implementation
                  </List.Item>
                    <List.Item>
                        Effect confirmation/Follow-up
                  </List.Item>
                </List>

                <Header floated="left" as="h4" style={{ marginTop: "6px" }} dividing>
                    Issues Surrounding the Problem
                </Header>
                <Form style={{ marginTop: "60px" }}>
                    <Editor />
                    <div className="button-row" style={{ width: '320px' }}>

                        <Form.Button
                            onClick={this.handleOneSubmit}
                            disabled={this.state.buttonOneCompleted}
                            className="submit-button"
                            content="Submit"
                            labelPosition="right"
                            icon='upload'
                            color="green"
                        />
                        <Form.Button
                            onClick={this.handleOneSubmit}
                            disabled={this.state.buttonOneCompleted}
                            className="edit-button"
                            content="Edit"
                            labelPosition="right"
                            icon='edit'
                            color="green"
                        />
                    </div>
                </Form>
            </Segment>


        );
    }
}

export default Management;
