import PropTypes from "prop-types";
import FriendListItem from "./FriendListItem";

const FriendList = ({ friends }) => {
  return (
    <ul className="cardsAll">
      {friends.map((friend) => (
        <FriendListItem
          key={friend.id}
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
        />
      ))}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.array,
};

export default FriendList;
