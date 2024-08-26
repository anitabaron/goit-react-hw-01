import PropTypes from "prop-types";
import FriendListItem from "./FriendListItem";

const FriendList = (friends) => {
  return (
    <>
      <ul>
        <FriendListItem />
      </ul>
    </>
  );
};

FriendList.propTypes = {
  friends: PropTypes.shape({
    avatar: PropTypes.string,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }),
};

export default FriendList;
