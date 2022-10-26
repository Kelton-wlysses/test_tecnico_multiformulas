import { UserProvider } from "./UserContext";
import { CartProvider } from "./CartContext";

const Providers = ({ children }) => {
  return (
    <UserProvider>
      <CartProvider>{children}</CartProvider>
    </UserProvider>
  );
};
export default Providers;
