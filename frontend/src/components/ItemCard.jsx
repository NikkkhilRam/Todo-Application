import React, { useState } from "react";
import {
  MdArrowDownward,
  MdArrowDropDown,
  MdArrowDropDownCircle,
  MdCleanHands,
  MdClear,
  MdOutlineDelete,
} from "react-icons/md";

function ItemCard(props) {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <div className="flex flex-col">
      <div className="w-full flex items-center justify-between bg-blue-500 bg-opacity-80 p-3 rounded-t-lg">
        <p className="text-white font-medium">{props.title}</p>
        <MdArrowDropDownCircle
          color="white"
          className="cursor-pointer"
          onClick={() => {
            setShowInfo(!showInfo);
          }}
        />
      </div>
      {showInfo && (
        <div className="flex items-center justify-between p-3 rounded-b-lg bg-blue-100 ">
          <div> {props.description}</div>
          <MdClear
            className="cursor-pointer"
            onClick={() => {
              props.deleteItem(props.title);
            }}
          />
        </div>
      )}
    </div>
  );
}

export default ItemCard;
