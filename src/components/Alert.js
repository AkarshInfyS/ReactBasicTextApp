import React from "react";

export default function Alert(props) {
  function capital(word) {
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase()+ lower.slice(1)
  }
  return (
    props.Alertprop && (
      <div className="container">
        <div
          className={`alert alert-${props.Alertprop.type} alert-dismissible fade show`}
          role="alert"
        >
          <strong>
            {capital(props.Alertprop.type)}:{props.Alertprop.msg}
          </strong>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="alert"
            aria-label="Close"
          ></button>
        </div>
      </div>
    )
  );

}
