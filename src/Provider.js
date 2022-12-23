import React, { useState } from "react";
import PackageContext from './Context'

const Provider = (props) => {
    
    const [mission, setMission] = useState({
        mName: "Mission 01",
        agent: "007",
        accept: "Mission Not Accepted Yet"
    })
    
    return(
        <PackageContext.Provider value={{
            data:mission,
            setAccepted: () => {
                setMission({...mission, accept:"Accepted"});
            }
        }}>
            {props.children}
        </PackageContext.Provider>
    );
}

export default Provider;