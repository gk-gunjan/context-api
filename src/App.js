import React, { Fragment } from 'react';
import Context from "./context";
import Provider from "./provider";

const Agents =()=>{
  return <AgentOne />
}

const AgentOne =()=>{
  return <Agenttwo />
}

const Agenttwo =()=>(
  <AgentBond />
)

const AgentBond =()=>(
  <Context.Consumer>
    {
      //here contect means referning to the data which were provided in the provider data :mission  
       //remember this context it will directly call to the provider context
       //remeber this call back
      (context)=>(
        <Fragment>
          <h3>Agent Information</h3>
          <p>Mission Name: {context.data.mname}</p>
          <p>Mission Code: {context.data.agent}</p>
        </Fragment>
      )
    }
  </Context.Consumer>
)

function App() {
  return (
    <div>
      <h1>Context API</h1>
        <Provider>
          <Agents />
        </Provider>
    </div>
    
  );
}

export default App;
