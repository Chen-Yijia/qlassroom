import React, { Component } from "react";
import { Grid, Step, Header } from "semantic-ui-react";
import Nav from "../../../components/shared/Nav";
import ProgrammeInfo from "./component/introduction";
import PersonalInfo from "./component/specific";

import "../../shared/layout.css";
// import _ from 'lodash'

class ProfilePage extends Component {
    constructor(props) {
        super(props);
        this.state = { activeStep: 0 };
        this.handleClick = this.handleClick.bind(this);
        this.handleStep = this.handleStep.bind(this);
    }

    handleClick = (id) => {
        // this.setState({ activeItem: name })
        // console.log(id)
        console.log(id);
    };

    handleStep = (activeStep) => {
        this.setState({ activeStep: activeStep + 1 });
    }

    render() {

        const { activeStep } = this.state;

        function Mainpanel(props) {
            const activeStep = props.activeStep;
            const handleStep = props.handleStep;

            if (activeStep === 0) {
                return <ProgrammeInfo activeStep={activeStep} handleStep={handleStep} />;
            }
            if (activeStep === 1) {
                return <PersonalInfo activeStep={activeStep} handleStep={handleStep} />;
            }
            if (activeStep === 2) {
                return <PersonalInfo activeStep={activeStep} handleStep={handleStep} />;
            }
        }

        const steps = [
            {
                key: 'programme',
                completed: activeStep !== 0,
                active: activeStep === 0,
                icon: 'info',
                title: 'Programme Introduction',
                description: 'Read through the introduction',
            },
            {
                key: 'personal',
                completed: activeStep > 1,
                active: activeStep === 1,
                disabled: activeStep === 0,
                icon: 'user',
                title: 'Specific Information',
                description: 'Fill in personal information',
            },
            {
                key: 'display',
                active: activeStep === 2,
                disabled: activeStep !== 2,
                icon: 'save',
                title: 'Information Confirmation',
                description: 'Please check your personal information'
            },
        ]

        return (
            <Grid>
                <Grid.Row columns={3}>
                    <Grid.Column floated="left" attached>
                        <Nav name="profile" />
                    </Grid.Column>

                    {/* <Grid.Column floated="left" className="sub-nav" width={1}>
                        <SubNav name="profile/info" />
                    </Grid.Column> */}

                    <Grid.Column floated="left" className="profile-main-panel" width={16}>
                        <Grid.Row className="panel-header" fluid>
                            <Header as="h2" content="Programme Information" dividing />
                        </Grid.Row>

                        <Grid.Row>
                            <Step.Group items={steps} />
                        </Grid.Row>

                        <Grid.Row>
                            <Mainpanel activeStep={activeStep} handleStep={this.handleStep} />
                        </Grid.Row>

                    </Grid.Column>
                </Grid.Row>
            </Grid>
        );
    }
}

export default ProfilePage;