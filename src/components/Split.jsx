import React from "react";
import Button from "./Button";

const Split = function ({ friend, onAddSelectedFriend, selectedFriend }) {
  const selectFriend = friend.id === selectedFriend?.id;

  return (
    <div className={`split ${selectFriend && `lightblue`} `}>
      <div className="inner--section">
        <div className="image--and--name">
          <div>
            <img src={friend.img} alt={friend.name} />
          </div>
          <div className="name--and--date">
            <p className="name">{friend.name}</p>
            <p>
              {friend.date} &#183; {friend.time}
            </p>
          </div>
        </div>
        <div>
          <Button
            onClick={() => onAddSelectedFriend(friend)}
            className="btn btn--right"
          >
            {selectFriend ? "Unselect" : "Select"}
          </Button>
        </div>
      </div>
      <hr />
      {friend.balance < 0 && (
        <p className="red--text">
          You owe {friend.name} ${Math.abs(friend.balance)}
        </p>
      )}
      {friend.balance > 0 && (
        <p className="green--text">
          {friend.name} owes you ${friend.balance}
        </p>
      )}
      {friend.balance === 0 && <p>You and {friend.name} are even</p>}
    </div>
  );
};

export default Split;
