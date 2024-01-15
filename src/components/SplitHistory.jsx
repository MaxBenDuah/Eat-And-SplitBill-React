import React from "react";
import Split from "./Split";

const SplitHistory = function ({
  friends,
  onAddSelectedFriend,
  selectedFriend,
}) {
  return (
    <>
      <div className="split--main">
        {friends.map((friend) => (
          <Split
            key={friend.id}
            friend={friend}
            onAddSelectedFriend={onAddSelectedFriend}
            selectedFriend={selectedFriend}
          />
        ))}
      </div>
    </>
  );
};

export default SplitHistory;
