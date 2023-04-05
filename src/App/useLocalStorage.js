import React from "react";

function useLocalStorage(itemName, initialValue) {
  const [syncItems, setSyncItems] = React.useState(false);
  const [error, setError] = React.useState(false);
  const [loading, setLoading] = React.useState(true);
  const [item, setItem] = React.useState(initialValue);

  React.useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;

        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(localStorageItem);
        }

        setItem(parsedItem);
        setSyncItems(false);
        setLoading(false);
        console.log("SET LOADING FALSE");
      } catch (error) {
        setError(error);
      }
    }, 1500);
  }, [!syncItems]);

  const saveItem = (newTodos) => {
    // const stringifiedTodos = JSON.stringify(newTodos);
    //Guardar en local storage
    try {
      localStorage.setItem(itemName, JSON.stringify(newTodos));
      //setTodos
      setItem(newTodos);
    } catch (error) {
      setError(error);
    }
  };

  const synchronizeItems = () => {
    setLoading(true);
    setSyncItems(true);
  };

  return { item, saveItem, loading, error, synchronizeItems };
}

export { useLocalStorage };
