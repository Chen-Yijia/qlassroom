import React from 'react'
import { Button, Form, Grid, Header, Segment } from 'semantic-ui-react'

import { Link } from 'react-router-dom'

const LoginPage = () => (
    <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
        <Grid.Column style={{ maxWidth: 450 }}>
            <Header as='h2' color='blue' textAlign='center'>
                Log-in to your account
            </Header>
            <Form size='large'>
                <Segment stacked>
                    <Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail address' />
                    <Form.Input
                        fluid
                        icon='lock'
                        iconPosition='left'
                        placeholder='Password'
                        type='password'
                    />

                    <Link to="/home">
                        <Button color='blue' fluid size='large'>
                            Login
                        </Button>
                    </Link>

                </Segment>
            </Form>

        </Grid.Column>
    </Grid>
)
export default LoginPage