import React from "react";
import { withStorageListener } from "./withStorageListener";
import "./StorageChangeAlert.css";

function StorageChangeAlert({ show, toggleShow }) {
  if (show) {
    return (
      <div className="StorageChangeAlert-bg">
        <div className="StorageChangeAlert">
          <p>Hubo cambios en otra página.</p>
          <p>Presione el botón para recargar los ToDos.</p>
          <button onClick={() => toggleShow()}> ¿Recargar ToDos?</button>
        </div>
      </div>
    );
  }
  return <React.Fragment></React.Fragment>;
}
const StoreChangeAlertWithStorageListener =
  withStorageListener(StorageChangeAlert);

export { StoreChangeAlertWithStorageListener };
