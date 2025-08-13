import type { ReactNode } from "react";
import Footer from "./Footer";
import Header from "./Header";

type LayoutProps = {
    children: ReactNode;
};

function Layout({ children }: LayoutProps) {
    return (
        <main className="relative flex flex-col min-h-[100dvh]">
            <Header />
            {children}
            <Footer />
        </main>
    );
}

export default Layout;
