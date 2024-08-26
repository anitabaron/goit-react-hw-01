import "./App.css";
import "./normalization.css";
import "./components/Profile.css";
import Profile from "./components/Profile.jsx";
import userData from "./components/userData.json";

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
    </>
  );
};

export default App;
