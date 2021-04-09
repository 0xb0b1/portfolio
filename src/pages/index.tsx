import { useEffect } from "react";

import GlobalStyles from "../styles/global";

import Navbar from "../components/Navbar";
import HomePage from "../components/HomePage";

export default function Home() {
  return (
    <>
      <GlobalStyles />

      {/* <HomePage /> */}

      <Navbar />
    </>
  );
}
