import React from "react";
import { withStorageListener } from "./withStorageListener";

function StorageChangeAlert({ show, toggleShow }) {
  return (
    <React.Fragment>
      {show && <p>¿Hubo cambios?</p>}
      {show && <button onClick={() => toggleShow()}> ¿Recargar ToDos?</button>}
    </React.Fragment>
  );
}
const StoreChangeAlertWithStorageListener =
  withStorageListener(StorageChangeAlert);

export { StoreChangeAlertWithStorageListener };
