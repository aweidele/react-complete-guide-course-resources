import { Outlet, useNavigation } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";

export function RootLayout() {
  const navigation = useNavigation();
  return (
    <>
      <header>
        <MainNavigation />
      </header>
      <main>
        {navigation.state === "loading" && <p>Loading...</p>}
        <Outlet />
      </main>
    </>
  );
}
