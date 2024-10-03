import Home from "./Components/Home";
import Login from "./Components/Login";
import UserContextProvider from "./context/UserContextProvider";

function App() {
  return (
    <UserContextProvider>
      <Login />
      <Home />
    </UserContextProvider>
  );
}

export default App;
