import PropTypes from "prop-types";
import FriendListItem from "./FriendListItem";
import friends from "./friends.json";

const FriendList = () => {
  return (
    <>
      <ul className="cardFriend">{friends.map(FriendListItem)}</ul>
    </>
  );
};

FriendList.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default FriendList;
