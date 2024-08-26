import PropTypes from "prop-types";

const FriendListItem = (friends) => {
  friends.map((friend) => {
    return (
      <li key={friend.id}>
        <img src={friend.avatar} alt="Avatar" width="48" />
        <p>{friend.name}</p>
        <p>{friend.isOnline}</p>
      </li>
    );
  });
};

FriendListItem.propTypes = {
  friends: PropTypes.shape({
    avatar: PropTypes.string,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }),
};

export default FriendListItem;
