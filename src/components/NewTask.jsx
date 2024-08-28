import { useRef, useState } from "react";
import Button from "./Button";
import Modal from "./Modal";

export default function NewTask({ onAdd }) {
  const modal = useRef();
  const [enteredTask, setEnteredTask] = useState("");

  function handleChange(event) {
    setEnteredTask(event.target.value);
    console.log(enteredTask);
  }

  function handleClick() {
    if (enteredTask.trim() === "") {
      <Modal ref={modal} btnCaption="Okay">
        <h2 className="text-xl font-bold text-stone-700 my-4">Invalid Input</h2>
        <p className="text-stone-600 mb-4">
          Oops... looks like you forgot to input a value
        </p>
        <p className="text-stone-600 mb-4">
          Please make sure you provide a valid value for every input
        </p>
      </Modal>;
      return;
    }

    setEnteredTask("");
    onAdd(enteredTask);
  }

  return (
    <div className="flex items-center gap-4">
      <input
        onChange={handleChange}
        value={enteredTask}
        type="text"
        className="w-64 px-2 py-1 rounded-sm bg-stone-200"
      />
      <button
        className="bg-stone-500 px-4 py-2 rounded-sm text-stone-200"
        onClick={handleClick}
      >
        Add Tasks
      </button>
    </div>
  );
}
