import "./App.css";
import "./normalization.css";
import "./components/Profile.css";
import "./components/FriendList.css";
import Profile from "./components/Profile.jsx";
import FriendList from "./components/FriendList.jsx";
import userData from "./components/userData.json";
import friends from "./components/friends.json";

const App = () => {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
    </>
  );
};

export default App;
