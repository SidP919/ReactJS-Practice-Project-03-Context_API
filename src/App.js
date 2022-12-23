import React, { Fragment } from "react";
import Provider from "./Provider";
import Context from "./Context";

const Agent = () => {
    return (
        <FindAgent />
    )
}

const FindAgent = () => {
    return (
        <AgentBond />
    )
}

const AgentBond = () => {
    return(
        <Context.Consumer>
            {context => (
                <Fragment>
                    <h1>Mission Information:</h1>
                    <h4>Mission Name: {context.data.mName}</h4>
                    <h4>Assigned to Agent Code: {context.data.agent}</h4>
                    <h4>Mission Status: {context.data.accept}</h4>
                    <button onClick={context.setAccepted}>Accept Mission</button>  
                </Fragment>
            )}
        </Context.Consumer>
    );
}

const App = () => {
    return (
        <div>
            <Provider>
                <Agent />
            </Provider>
        </div>
    )
}

export default App;