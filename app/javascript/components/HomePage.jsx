import React, { useState, useEffect } from "react"


const HomePage = ({value}) => {
  useEffect(() => {
    console.log("use effect!!");
  }, []);

  return (
    <div className="background-image" style={{ width:"100%",
  height: "100%"}}>
      <h3>This HomePage component</h3>
      <h4>value</h4>
    </div>
  );
};


export default HomePage


