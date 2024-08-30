import FriendListItem from "./FriendListItem";

const FriendList = ({ friends }) => {
  return (
    <ul className="cardsAll">
      {friends.map((friend) => (
        <FriendListItem
          key={friend.id}
          id={friend.id}
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
        />
      ))}
    </ul>
  );
};

export default FriendList;
