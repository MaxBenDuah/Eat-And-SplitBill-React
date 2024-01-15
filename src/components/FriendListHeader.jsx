import React from "react";

const FriendListHeader = function ({children}) {
  return (
    <div className="friends--text">
      <p>{children}</p>
      <p>See more</p>
    </div>
  );
}

export default FriendListHeader;