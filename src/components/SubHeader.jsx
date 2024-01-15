import React from "react";
import Button from "./Button";

const SubHeader = function ({ value, friends }) {
  const numFriendsOwe = friends.filter((friend) => friend.balance > 0).length;

  const num = 13_432.34 - value;

  const options = {
    style: "currency",
    currency: "USD",
  };

  const formatNum = new Intl.NumberFormat(navigator.language, options).format(
    num
  );

  return (
    <div>
      <div className="display--friend--owe">
        {numFriendsOwe === 1 && <p>{numFriendsOwe} Friend is owing you</p>}
        {numFriendsOwe > 1 && <p>{numFriendsOwe} Friends are owing you</p>}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="icon-btn"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z"
          />
        </svg>
      </div>
      <h1 className="display--amount">{formatNum}</h1>

      <div className="buttons">
        <Button className="btn btn--left">
          <i className="fa-solid fa-circle-plus btn--icons"></i> Add manually
        </Button>
        <Button className="btn btn--right">
          <i className="fa-solid fa-qrcode btn--icons"></i> Quick Scan
        </Button>
      </div>
    </div>
  );
};

export default SubHeader;
