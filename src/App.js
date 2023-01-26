import "./App.css";
import ProfilePhoto from "./components/Profile/ProfilePhoto";
import FullName from "./components/Profile/FullName";
import Address from "./components/Profile/Address";

function App() {
  return (
    <div className="App">
      <FullName />
      <Address />
      <ProfilePhoto />
    </div>
  );
}

export default App;
