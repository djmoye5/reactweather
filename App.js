import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    constructor(props) {
        super(props);

        // save data in state
        this.state = {
            people: props.people
        };
    }
    
    count = () => {
        let people = this.state.people;
        people = people + 1;
        this.setState({ people });
    };

    reset = () => {
        let people = this.state.people;
        alert("Are you sure?");
        people = 0;
        this.setState({ people });
    }  
    
        // update data in state
        // will automatically call render method after update 

    render() {
    // get data from state, not from props
    const people = this.state.people;
    return (
        <div>
            <button onClick={this.count}>Press to Count Visitors</button>
            <button onClick={this.reset}>Press to Reset Counter</button>
            <h1>
                Attendance today is:  {people}
            </h1>
        </div>
    );
}
}

export default App