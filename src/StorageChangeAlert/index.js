import React from "react";
import { withStorageListener } from "./withStorageListener";

function StorageChangeAlert({ show, toggleShow }) {
  return <React.Fragment>{show && <p>¿Hubo cambios?</p>}</React.Fragment>;
}
const StoreChangeAlertWithStorageListener =
  withStorageListener(StorageChangeAlert);

export { StoreChangeAlertWithStorageListener };
