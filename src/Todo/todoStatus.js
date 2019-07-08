import React from "react";
import PropTypes from "prop-types";

const todoStatus = ({ changeStatus }) => {
  return (
    <div style={{ display: "flex" }}>
      <button
        style={{ flex: 1 }}
        type="button"
        onClick={() => changeStatus("all")}
      >
        All Tasks
      </button>
      <button
        style={{ flex: 1 }}
        type="button"
        onClick={() => changeStatus("pending")}
      >
        Pending Tasks
      </button>
      <button
        style={{ flex: 1 }}
        type="button"
        onClick={() => changeStatus("completed")}
      >
        Completed Tasks
      </button>
    </div>
  );
};

todoStatus.propTypes = {};

export default todoStatus;
