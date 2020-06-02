import React,{useState} from "react";

import PackageContext from "./context";

const Provider =props =>{

  const [mission, setMission] = useState({

    //creating object for the mission
    //defining states as long as you want
    mname: "Go to Russia",
    agent: "007",
    accept: "Not Accepted"
  });

    return(
      <PackageContext.Provider 
      value={{
        //loaded all the information of mission variable to data 
        data: mission,
        // passing a method to change the value of not accepted to accepted
        //we can pass as many method as we want
        isMissionAccepted:() =>{
          //we have loaded all the values in the mission  and changed the values of not accpeted to accepted
          setMission({...mission, accept: "ACCEPTED"})
        }
      }}      
      >
      {props.children}
      </PackageContext.Provider>      
    );
};

export default Provider;

