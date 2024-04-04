import React from "react";
import { IoIosAddCircle } from "react-icons/io";

function AddItem(props) {
  return (
    <div
      onClick={props.onCallback}
      className="flex items-center w-full p-3 bg-blue-100 rounded-lg gap-2 cursor-pointer"
    >
      <IoIosAddCircle className="text-blue-700 " />
      <h1 className="text-blue-700 text-sm font-medium">Add task</h1>
    </div>
  );
}

export default AddItem;
