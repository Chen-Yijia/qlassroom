import React, { Component } from 'react'
import  Nav  from '../components/shared/Nav'

class ReportPage extends Component {
    handleClick = (e, { name }) => {
        this.setState({ activeItem: name })
    }
    render() {
        return (
            <Nav name='report' onClick={this.handleClick} />)
    }
}

export default ReportPage