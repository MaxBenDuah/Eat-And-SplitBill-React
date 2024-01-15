import React from "react";

const Friend = function ({ friend, onDeleteFriend }) {
  return (
    <div className="friend--info">
      <p className="img-container">
        <img src={friend.img} alt={friend.name} />
      </p>
      <p className="friend--name">{friend.name}</p>
      <div onClick={() => onDeleteFriend(friend.id)} className="delete">
        <p>-</p>
      </div>
    </div>
  );
};

export default Friend;
