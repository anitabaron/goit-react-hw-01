const FriendListItem = ({ id, avatar, name, isOnline }) => {
  console.log({ id, avatar, name, isOnline });

  return (
    <li key={id} className="cardFriend">
      <img className="imgFriend" src={avatar} alt="Avatar" width="70" />
      <p className="name">{name}</p>
      <p style={{ color: isOnline ? "green" : "red" }}>
        {isOnline ? "Online" : "Offline"}
      </p>
    </li>
  );
};

export default FriendListItem;
