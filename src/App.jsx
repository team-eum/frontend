import { UserProvider } from "./domain/UserContext";
import Router from "./route/Router";

function App() {
  return (
    <UserProvider>
      <Router />
    </UserProvider>
  );
}

export default App;
