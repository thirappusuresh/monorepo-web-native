import React from "react";

import { SECRET_SHARED_CODE, withData } from "shared";

const App = ({ apiState, data, refetchData }) => {
  return (
    <div className="main-container">
      <div className="container">
        <h1>Monorepo Demo</h1>
        <p style={{ marginBottom: "10px" }}>
          This text is coming from shared component:{" "}
          <span style={{ color: "red" }}>{SECRET_SHARED_CODE}</span>
        </p>
        <button
          onClick={refetchData}
          style={{
            marginBottom: "10px",
            backgroundColor: "#4CAF50",
            border: "none",
            color: "white",
            padding: "15px 32px",
            textAlign: "center",
            textDecoration: "none",
            display: "inline-block",
            fontSize: "16px"
          }}
        >
          Trigger shared alert
        </button>
      </div>
    </div>
  );
};

export default withData(App);
