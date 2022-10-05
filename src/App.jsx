import Routes from "./components/Routes";
import { AppRoot } from "./styles/App";
import { Global } from "./styles/global";

function App() {
  return (
    <AppRoot>
      <Global />
      <Routes />
    </AppRoot>
  );
}

export default App;
