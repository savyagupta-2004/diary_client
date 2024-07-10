import React from "react";

export default function Alerts(props) {
  // const chnage = (word) => {
  //   if (word === "danger") {
  //     word = "Error";
  //   }
  // };
  return (
    <div style={{ height: "12px" }}>
      {props.alert && (
        <div
          className={`alert alert-${props.alert.type} alert-dismissible fade show`}
          role="alert"
          style={{
            // backgroundColor: props.mode === "light" ? "#343a40" : "#f8d7da",
            // color: props.mode === "light" ? "#53a653," : "#53a653,",
            height: "50px",
            marginBottom: "10px",
          }}
        >
          {/* (props.alert.type) */}
          <strong>{props.alert.message}</strong>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="alert"
            aria-label="Close"
          ></button>
        </div>
      )}
    </div>
  );
}
