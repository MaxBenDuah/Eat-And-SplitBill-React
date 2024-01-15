import React from "react";
import Friend from "./Friend";

const DisplayFriend = function ({
  friends,
  onDeleteFriend,
  onToggleAddFriend,
}) {
  return (
    <div className="display--friends">
      {friends.map((friend) => (
        <Friend
          key={friend.id}
          friend={friend}
          onDeleteFriend={onDeleteFriend}
        />
      ))}
      <div onClick={onToggleAddFriend} className="add--new">
        <div className="dashed--icon">
          <i className="fa-regular fa-plus"></i>
        </div>
        <p>Add New</p>
      </div>
    </div>
  );
};

export default DisplayFriend;
