import { useEffect } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";

import Home from "../pages/Home";
import Single from "../pages/Single";
import About from "../pages/About";

export function Router() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <Routes>
            <Route path="*" element={<Navigate replace to="/" />} />

            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/project/:slug" element={<Single />} />
        </Routes>
    );
}
