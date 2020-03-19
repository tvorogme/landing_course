import React from 'react';
import './App.css';


class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {a: props.a, from_props_a: 0};
    }

    static getDerivedStateFromProps(props, state) {
        return {from_props_a: props.a}
    }

    f = () => {

        const newState = this.state.a + 1;
        console.log(this.state.a, newState);
        this.setState({a: newState})
    };

    render() {
        return <div>
            <h1>LOLKEK {this.state.a + this.state.from_props_a} {this.state.b} {this.state.color}</h1>
            <button onClick={this.f}>Add One</button>
        </div>
    }
}

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {a: 1};
    }

    f = () => {
        const newState = this.state.a + 1;
        this.setState({a: newState});
        console.log(newState);
    };

    render() {


        return <div>
            <h2>Привет!</h2>
            <button onClick={this.f}>GLOBAL ADD</button>

            {[...Array(10).keys()].map((x) => <Calculator key={x} a={this.state.a}/>)}


        </div>
    }
}

export default App;
