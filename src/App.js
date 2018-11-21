import React from 'react';
import styled from 'styled-components';

const Title = styled.div`
    font-family: 'Assassin$';
    font-size: 23px;
`;

const Title2 = styled.div`
    font-family: 'Assassin$';
    font-size: 10px;
`;

export default class App extends React.Component {
    constructor(...args) {
        super(...args);

        this.state = {
            open: false
        };

        this.open = this.open.bind(this);
    }

    open() {
        this.setState({
            open: true,
        });
    }

    render() {
        return (<div>
            <Title>This is a test</Title>
            <button onClick={this.open}>Click Me</button>
            {this.state.open && <div><Title2>I'm Open!</Title2></div>}
        </div>)
    }
}