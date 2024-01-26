import React, { useState } from "react";
import Header from "./Header";
import Logo from "./Logo";
import SubHeader from "./SubHeader";
import FriendList from "./FriendList";
import friendsData from "./FriendsData";
import SplitBillHeader from "./SplitBillHeader";
import SplitBillForm from "./SplitBillForm";
import FriendListHeader from "./FriendListHeader";
import SplitHistory from "./SplitHistory";
import AddFriendForm from "./AddFriendForm";
import DisplayFriend from "./DisplayFriend";

const App = function () {
  const [friends, setFriends] = useState(friendsData);
  const [selectedFriend, setSelectedFriend] = useState(null);
  const [value, setValue] = useState(0);
  const [showAddFriendForm, setShowAddFriendForm] = useState(false);

  const handleToggleAddFriendForm = () => {
    setShowAddFriendForm((curr) => !curr);
  };

  const handleAddFriend = (friend) => {
    setFriends((prevFriend) => [...prevFriend, friend]);
    setShowAddFriendForm(false);
  };

  const handleSelectedFriend = (friend) => {
    setSelectedFriend((curr) => (curr?.id === friend.id ? null : friend));
    setShowAddFriendForm(false);
  };

  const handleSplitBill = (value) => {
    value > 0 && setValue(value);
    setFriends((prevFriend) =>
      prevFriend.map((friend) =>
        friend.id === selectedFriend.id
          ? { ...friend, balance: friend.balance + value }
          : friend
      )
    );
    setSelectedFriend(null);
  };

  const handleDeleteFriend = (id) => {
    setFriends((prevFriend) => prevFriend.filter((friend) => friend.id !== id));
  };

  return (
    <div className="main--app">
      <div className="splitter--main--interface">
        <Header />
        <Logo />
        <SubHeader value={value} friends={friends} />
        <FriendList>
          <FriendListHeader>Friends List</FriendListHeader>
          <DisplayFriend
            friends={friends}
            onDeleteFriend={handleDeleteFriend}
            onToggleAddFriend={handleToggleAddFriendForm}
          />
          {showAddFriendForm && <AddFriendForm onAddFriend={handleAddFriend} />}
          <FriendListHeader>Split History</FriendListHeader>
          <SplitHistory
            friends={friends}
            onAddSelectedFriend={handleSelectedFriend}
            selectedFriend={selectedFriend}
          />
        </FriendList>
      </div>
      {selectedFriend && (
        <div className="split--bill">
          <Header />
          <SplitBillHeader />
          <SplitBillForm
            selectedFriend={selectedFriend}
            onSplitBill={handleSplitBill}
            key={selectedFriend.id}
          />
        </div>
      )}
    </div>
  );
};

export default App;
