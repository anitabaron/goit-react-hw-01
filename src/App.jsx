import "./App.css";
import "./normalization.css";
import "./components/Profile.css";
import "./components/FriendList.css";
import "./components/TransactionHistory.css";
import Profile from "./components/Profile.jsx";
import FriendList from "./components/FriendList.jsx";
import TransactionHistory from "./components/TransactionHistory.jsx";
import userData from "./components/userData.json";
import friends from "./components/friends.json";
import transactions from "./components/transactions.json";

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
      <TransactionHistory items={transactions} />
    </>
  );
};

export default App;
