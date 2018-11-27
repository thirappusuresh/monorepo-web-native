import React, { Component } from "react";
import "./App.css";

import { SECRET_SHARED_CODE, withData } from "shared";

const App = ({ apiState, data, refetchData }) => {
  return (
    <div className="App">
      <h1>Data fetching example: {SECRET_SHARED_CODE}</h1>
      {apiState.isIdle() && <p>This will never be idle</p>}
      {apiState.isPending() && (
        <p>
          Please wait, <strong>fetching data</strong>!
        </p>
      )}
      {apiState.isSuccess() &&
        data.map(user => (
          <p key={user.name}>
            {user.name} works at {user.company.name}
          </p>
        ))}
      {apiState.isError() && (
        <p>
          Argh, encountered an <strong>error</strong>
        </p>
      )}
      {<button onClick={refetchData}>Click to refetch</button>}
    </div>
  );
};

export default withData(App);
