import PropTypes from "prop-types";

const FriendListItem = ({ avatar, name, id }) => {
  return (
    <li>
      {friends.map((friend) => {
        return (
          <>
            <img src={avatar} alt="Avatar" width="48" />
            <p>Friend name</p>
            <p>Friend status</p>
            <p key={id}>{name}</p>
          </>
        );
      })}
    </li>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default FriendListItem;
