import React, { useEffect, useState } from "react";
import AddItem from "./AddItem";
import ItemCard from "./ItemCard";

function Layout() {
  const [dummy, setDummy] = useState(null);
  const [addItem, setAddItem] = useState(false);
  const [itemValue, setItemValue] = useState("");
  const [itemDesc, setItemDesc] = useState("");

  const handleAddItemBtn = async () => {
    if (itemValue !== "") {
      const item = {
        title: itemValue,
        description: itemDesc,
      };
      const response = await fetch("http://localhost:3000/task", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(item),
      }).catch((err) => {
        console.log(err);
      });
    }
    setItemDesc("");
    setItemValue("");
    setAddItem(false);
  };

  const deleteTask = async (taskId) => {
    await fetch(`http://localhost:3000/task/${taskId}`, {
      method: "DELETE",
    })
      .then(() => {
        fetchTasks();
      })
      .catch((error) => console.error(error));
  };

  const fetchTasks = () => {
    fetch("http://localhost:3000/task")
      .then((response) => response.json())
      .then((json) => setDummy(json))
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    fetchTasks();
  }, [addItem]);
  return (
    <div className="flex flex-col sm:w-1/2 mx-auto p-3 border h-screen m-3 shadow-lg gap-4 shadow-blue-800 overflow-y-auto rounded-lg">
      <h1 className="text-center text-2xl font-semibold text-blue-500 ">
        TODO APPLICATION
      </h1>
      <AddItem
        onCallback={() => {
          setAddItem(!addItem);
        }}
      />
      {addItem && (
        <div className="w-full flex items-center justify-between gap-4 rounded-lg p-3 bg-blue-50">
          <div className="flex flex-col w-full gap-4">
            <input
              type="text"
              className="w-full py-2 rounded-lg px-2 "
              value={itemValue}
              placeholder="Enter task title"
              onChange={(e) => {
                setItemValue(e.target.value);
              }}
            />
            <textarea
              type="text"
              className="w-full py-2 rounded-lg px-2"
              placeholder="Enter task description"
              value={itemDesc}
              onChange={(e) => {
                setItemDesc(e.target.value);
              }}
            />
          </div>
          <button
            onClick={handleAddItemBtn}
            className="bg-blue-950 text-white px-4 py-2 rounded-full"
          >
            Add
          </button>
        </div>
      )}

      {dummy &&
        dummy.tasks.map((item) => {
          return (
            <ItemCard
              title={item.title}
              description={item.description}
              deleteItem={(title) => {
                deleteTask(item._id);
              }}
            />
          );
        })}
    </div>
  );
}

export default Layout;
