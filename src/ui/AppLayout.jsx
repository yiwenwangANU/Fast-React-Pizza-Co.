import Header from "./Header";
import CartOverview from "../features/cart/CartOverview";
import { Outlet } from "react-router-dom";
function AppLayout() {
  return (
    <div>
      <Header />
      <p>_______________________________________</p>
      <main>
        <Outlet />
      </main>
      <p>_______________________________________</p>
      <CartOverview />
    </div>
  );
}

export default AppLayout;
