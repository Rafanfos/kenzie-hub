import TechProvider, { ITechProvider } from "../context/TechContext";
import UserProvider from "../context/UserContext";

const Providers = ({ children }: ITechProvider) => {
  return (
    <UserProvider>
      <TechProvider>{children}</TechProvider>
    </UserProvider>
  );
};

export default Providers;
