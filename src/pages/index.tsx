import { useEffect } from "react";
import Header from "../components/Header";

import GlobalStyles from "../styles/global";

export default function Home() {
    // fix the glitches
    useEffect(() => {
        window.scrollTo({ top: 0 });
    });

    return (
        <>
            <GlobalStyles />

            <Header />

        </>
    );
}
