import React, { useState } from "react";
import Button from "./Button";

const AddFriendForm = function ({onAddFriend}) {
  const [name, setName] = useState("");
  const [img, setImg] = useState("");

  const now = new Date();

  const optionTime = {
    hour: "numeric",
    minute: "numeric"
  };

  const optionDate = {
    month: "short",
    year: "numeric",
    day: "numeric"
  };

  const time = new Intl.DateTimeFormat(navigator.language, optionTime).format(now);
  const date = new Intl.DateTimeFormat(navigator.language, optionDate).format(now);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !img) return;

    const addFriend = {
      name,
      img,
      time,
      date,
      id: Date.now(),
      balance: Math.floor(Math.random() * 20)
    };

    onAddFriend(addFriend);

    setName("");
    setImg("");
  }

  return (
    <form onSubmit={handleSubmit} className="add--friend-form">
      <div className="input--label">
        <label>Enter Friend name</label>
        <input type="text" value={name} onChange={e => setName(e.target.value)} />
      </div>

      <div className="input--label">
        <label>Image URL</label>
        <input type="text" value={img} onChange={e => setImg(e.target.value)} />
      </div>
      <Button className="btn btn--right input--btn">Add</Button>
    </form>
  );
}

export default AddFriendForm;