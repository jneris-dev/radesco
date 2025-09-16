import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import Home from "../pages/Home";
import Single from "../pages/Single";
import About from "../pages/About";
import NotFound from "../pages/NotFound";

export function Router() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <Routes>
      <Route path="*" element={<NotFound />} />

      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/project/:slug" element={<Single />} />
    </Routes>
  );
}
