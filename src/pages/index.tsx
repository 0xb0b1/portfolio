import { useEffect } from "react";

import GlobalStyles from "../styles/global";

import Menu from "../components/Menu";
import HomePage from "../components/HomePage";

export default function Home() {
  return (
    <>
      <GlobalStyles />

      {/* <HomePage /> */}

      <Menu />
    </>
  );
}
