/* eslint-disable no-undef */
import React, { Component } from 'react'

class Index extends Component {
    
    state = {

        name : "John"
    }

    handleclick = () => this.setState ({
        name: "Linus"
    })

    render() {

        return(
            <>
                <h2> Hi {this.state.name}</h2>
                <button onClick={this.handleclick}>Click Me</button>
            </>
        )

    };
    
}

export default Index;