import PropTypes from "prop-types";

const FriendListItem = ({ id, avatar, name, isOnline }) => {
  return (
    <li key={id}>
      <img src={avatar} alt="Avatar" width="48" />
      <p>{name}</p>
      <p>{isOnline}</p>
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
