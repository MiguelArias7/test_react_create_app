import React from "react";

function withStorageListener(WrappedComponent) {
  return function WrappedComponentWithStorageListener(props) {
    const [storageChange, setStorageChange] = React.useState(false);

    React.useEffect(() => {
      const onChange = (change) => {
        if (change.key === "TODOS_V1") {
          setStorageChange(true);
        }
      };
      window.addEventListener("storage", onChange);

      return () => {
        window.removeEventListener("storage", onChange);
      };
    }, []);

    const toggleShow = () => {
      setStorageChange(false);
      props.synchronizeTodos();
    };

    return (
      <WrappedComponent
        show={storageChange}
        toggleShow={toggleShow}
      ></WrappedComponent>
    );
  };
}

export { withStorageListener };
