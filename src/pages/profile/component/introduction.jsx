import React, { Component } from "react";
import { Segment, Header, List, Checkbox, Button } from "semantic-ui-react";

import "./layout.css";
// import _ from 'lodash'

class ProgrammeInfo extends Component {
    constructor(props) {
        super(props);
        this.state = { boxCheked: false };
        this.handleClick = this.handleClick.bind(this);
        this.handleCheck = this.handleCheck.bind(this);
    }

    handleClick = () => {
        // this.setState({ activeItem: name })
        // console.log(id)
        this.props.handleStep(this.props.activeStep);
    };

    handleCheck = () => {
        this.setState(state => ({
            boxCheked: !state.boxCheked
        }));
    }

    render() {

        const { boxCheked } = this.state;

        return (
            <div class='container'>
                <Segment className="information-item" style={{ height: "200px" }}>
                    <Header floated="left" as="h4" dividing style={{ marginTop: "6px" }}>
                        Programme Objectives
                    </Header>
                    <p style={{ marginTop: "50px", fontSize: "15px" }}>
                        The application of iCloud Enterprise Application (IEA) systems to manage the flow of business transactions cannot be underestimated.  In such a world of digitalization, the use of IEA applications would provide a focused project management methodology to improve the accounting and customization of the supply chain activities of organisations.
                    </p>
                    <p style={{ fontSize: "15px" }}>
                        In this programme, work placements would be provided for participants to engage in various activities that lead to the implementation of foundational IEA systems. In doing so, participants would develop performance competencies that are necessary to deliver value to IEA project applications, with particular reference to Charities.
                    </p>
                </Segment>

                <Segment className="information-item">
                    <Header floated="left" as="h4" dividing style={{ marginTop: "6px" }}>
                        Learning Outcomes
                    </Header>
                    <p style={{ marginTop: "50px", fontSize: "15px" }}>
                        The outcomes of this programme are to develop abilities to:
                    </p>
                    <List bulleted style={{ marginLeft: "50px", fontSize: "15px" }}>
                        <List.Item>Formulate a successful client acquisition strategy</List.Item>
                        <List.Item>Provide IT solutions and support for ICloud Enterprise Applications</List.Item>
                        <List.Item>Appraise service delivery in IT project management  </List.Item>
                    </List>
                </Segment>

                <Segment className="information-item" style={{ height: "1220px" }}>
                    <Header floated="left" as="h4" dividing style={{ marginTop: "6px" }}>
                        Scope of Work
                    </Header>
                    <p style={{ marginTop: "50px", fontSize: "15px" }}>
                        The scope of work, as such, revolves around three domains of IEA project management: client acquisition, solutions and support and service delivery. The areas of responsibilities for the three domains are listed below. The Singapore Pools iShine Cloud for Charities would be used as the main vehicle and exemplar to deliver the iCloud Enterprise Application.
                    </p>
                    {/* sub-info 1*/}
                    <Header floated="left" as="h5" style={{ marginTop: "6px", marginLeft: "20px" }}>
                        Domain 1: Client Acquisition
                    </Header>
                    <p style={{ marginTop: "55px", fontSize: "14px" }}>
                        This involves two processes:
                    </p>
                    <List bulleted style={{ marginLeft: "50px", fontSize: "14px" }}>
                        <List.Item>Outreach and engagement, that is, to organise clinics, events and talks, to engage Charities
                        </List.Item>
                        <List.Item>Client relationship and contact management, that is, managing the client’s needs and contracts
                        </List.Item>
                    </List>
                    <p style={{ fontSize: "14px" }}>
                        This is the initiation stage of the project. Among other things, the processes involve the establishment of leads and the discovery of the client persona and deciphering the actual client persona.  A sales proposal is to be introduced and system demonstration may be made.
                    </p>
                    <p style={{ fontSize: "14px" }}>
                        Based on the actual client persona, a client relationship is to be developed that caters for the client’s needs and securing a contract.
                    </p>
                    <p style={{ fontSize: "14px" }}>
                        <u>Measurement Criteria.</u> Evaluation on client acquisition may be made on engagement metrics such as the number of leads, first call resolution, average call handling time, escalations, conversion rate, and client retention.
                    </p>
                    {/* sub-info 2*/}
                    <Header floated="left" as="h5" style={{ marginTop: "6px", marginLeft: "20px" }}>
                        Domain 2: Solutions and Support
                    </Header>
                    <p style={{ marginTop: "55px", fontSize: "14px" }}>
                        This involves two processes:
                    </p>
                    <List bulleted style={{ marginLeft: "50px", fontSize: "14px" }}>
                        <List.Item>Business analysis, that is, to translate business requirements into technical requirements
                        </List.Item>
                        <List.Item>Operations support, that is, providing consultancy and support
                        </List.Item>
                    </List>
                    <p style={{ fontSize: "14px" }}>
                        This is the business analysis stage of the project. Here the business or functional needs in terms of an assessment of business problems, opportunities and objectives of the client would be established. These business needs should be matched to the IEA technology that is to be used.  This involves translating those needs into technical requirements in terms of input/output, interface, process flow or quality requirements. Modelling techniques such as data flow diagrams, UML (Unified Modeling Language) or entity relationship diagrams may be used.
                    </p>
                    <p style={{ fontSize: "14px" }}>
                        The overall purpose of this exercise to develop business solutions that address the business problems and technical requirements identified. In this journey to provide effective solutions to clients, support is being provided to the delivery of services. The results should be documented and recommendations made against business requirements.
                    </p>
                    <p style={{ fontSize: "14px" }}>
                        <u>Measurement Criteria.</u> Evaluation may consist of feedback on technical requirements and solutions from the client. The feedback may be analysed and modification to IEA project may be incorporated as required.
                    </p>
                    {/* sub-info 3*/}
                    <Header floated="left" as="h5" style={{ marginTop: "6px", marginLeft: "20px" }}>
                        Domain 3: Service Delivery
                    </Header>
                    <p style={{ marginTop: "55px", fontSize: "14px" }}>
                        This involves four processes:
                    </p>
                    <List bulleted style={{ marginLeft: "50px", fontSize: "14px" }}>
                        <List.Item>
                            Project management, that is, the delivery, onboarding and implementation of the IEA project
                        </List.Item>
                        <List.Item>
                            Partnership/vendor management, that is, translating passive vendor relationships to a proactive collaborative partnership
                        </List.Item>
                        <List.Item>
                            Change management, that is, developing change initiatives for IEA implementation
                        </List.Item>
                        <List.Item>
                            Client relationship management, including all of the activities and strategies that vendors use to manage their interactions with their current and potential clients.
                        </List.Item>
                    </List>
                    <p style={{ fontSize: "14px" }}>
                        Project management refers to meeting delivery milestones on on-demand scalable services that are matched to the needs of the client.
                    </p>
                    <p style={{ fontSize: "14px" }}>
                        Partnership/vendor management relates to having a sound vendor to client relationships in terms of keeping in mind the client’s IEA features needed, price affordability, rick and security concerns, and other needs such as meeting compliance regulations.
                    </p>
                    <p style={{ fontSize: "14px" }}>
                        Change management refers to the disruptions of business process reengineering, including the shifting of strategic initiatives, task undertaken, job design and roles, use of technology and IT infrastructure, knowledge capabilities, service delivery and culture of organisation.
                    </p>
                    <p style={{ fontSize: "14px" }}>
                        Client relationship management relates to client-vendor interactions that contribute to relationship building. The latter relationship building process is to develop client loyalty and retention.
                    </p>
                    <p style={{ fontSize: "14px" }}>
                        <u>Measurement Criteria.</u> IT delivery service-level agreement ratings may be used to evaluate the responsibilities of each party in the implementation of the IEA system. These include ratings on meeting the milestones of project management and escalation procedures, cost/service tradeoffs, reporting processes and dispute resolution processes.  Client satisfaction rates that evaluate whether expectations were met and client retention rates would be useful feedback.
                    </p>
                    <p style={{ marginTop: "40px", fontSize: "15px" }}>
                        <u>Indicative Reading.</u> Schwalbe, K. (2019). Information Technology Project Management, Cengage, Boston, MA. ISBN-13: 978-1337101356
                    </p>
                </Segment>

                <Segment className="information-item" style={{ height: "70px" }}>
                    <Checkbox label='I have read the above information' checked={boxCheked} onClick={this.handleCheck} />
                    <p style={{ marginTop: "-35px", paddingLeft: "5px" }}>(please check before preceeding to next step)</p>
                </Segment>

                <Button disabled={boxCheked === false} onClick={this.handleClick}>Proceed</Button>
            </div >
        );
    }
}

export default ProgrammeInfo;
