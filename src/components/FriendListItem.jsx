import PropTypes from "prop-types";

const FriendListItem = ({ avatar, name, isOnline, id }) => {
  {
    friends.map((friend) => {
      return (
        <li key={id}>
          <img src={avatar} alt="Avatar" width="48" />
          <p>{name}</p>
          <p>{isOnline}</p>
        </li>
      );
    });
  }
};

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default FriendListItem;
