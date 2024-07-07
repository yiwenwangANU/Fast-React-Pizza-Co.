import Header from "./Header";
import Loader from "../ui/Loader";
import CartOverview from "../features/cart/CartOverview";
import { Outlet, useNavigation } from "react-router-dom";
function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";
  return (
    <div className="layout">
      {isLoading && <Loader />}
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
