import TechProvider from "../context/TechContext";
import UserProvider from "../context/UserContext";

const Providers = ({ children }) => {
  return (
    <UserProvider>
      <TechProvider>{children}</TechProvider>
    </UserProvider>
  );
};

export default Providers;
