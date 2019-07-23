
import React from 'react';

const sideBarStyle = {
    backgroundColor: "orange",
    position: "relative",
    width: "200px",
    height: "680px"
}
class Quiz3 extends React.Component {

    state = { showing: true };

    render() {
        const { showing } = this.state;
        return (
            <div style={sideBarStyle}>
                {showing
                    ?
                    <div>
                        <h1>Home</h1>
                        <h1>About</h1>
                        <h1>Contact</h1>
                    </div>
                :null}
                <button onClick={() => this.setState({ showing: !showing })}>Hide</button>
            </div>
        )
    }
}
export default Quiz3