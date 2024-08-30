const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className="card">
      <div>
        <img src={image} alt="User avatar" className="profileAvatar" />
        <p className="userName">{name}</p>
        <p className="userDescr">@{tag}</p>
        <p className="userDescr">{location}</p>
      </div>

      <ul>
        <li>
          <span>Followers</span>
          <span className="userNum">{stats.followers}</span>
        </li>
        <li>
          <span>Views</span>
          <span className="userNum">{stats.views}</span>
        </li>
        <li>
          <span>Likes</span>
          <span className="userNum">{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
