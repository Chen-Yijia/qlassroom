import React, { Component } from "react";
import { Grid, Header, Image, Segment, Container } from 'semantic-ui-react'
import Nav from "../../components/shared/Nav";

import "../shared/layout.css";
// import _ from 'lodash'

class ProfilePage extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick = (id) => {
        // this.setState({ activeItem: name })
        // console.log(id)
        console.log(id);
    };



    render() {

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
                            <Header as="h2" content="Personal Profile" dividing />
                        </Grid.Row>


                        <Grid.Row>
                            <div className="profile-main-panel">
                                <Image src='https://react.semantic-ui.com/images/avatar/small/elliot.jpg' size='tiny' circular style={{ marginTop: '2em' }} />

                                <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' style={{ marginTop: '2em' }} />
                            </div>
                        </Grid.Row>

                    </Grid.Column>
                </Grid.Row>
            </Grid>
        );
    }
}

export default ProfilePage;