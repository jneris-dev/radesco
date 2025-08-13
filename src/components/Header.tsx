import { Link } from "react-router-dom";

function Header() {
    return (
        <header className="w-full h-auto py-4 sticky inset-0 z-10">
            <nav className="container w-full flex justify-between mx-auto items-center px-12">
                <div className="flex flex-col">
                    <Link to="/">
                        <h1 className="text-2xl font-semibold">Rafael Radesco</h1>
                        <p className="uppercase tracking-widest text-sm">
                            Creative Director
                        </p>
                    </Link>
                </div>
                <div className="flex gap-4 text-xl">
                    <li className="list-none group active">
                        <Link
                            to="/"
                            className="border-b-2 border-transparent group-[.active]:border-stone-700 group-hover:border-stone-700"
                        >
                            Work
                        </Link>
                    </li>
                    <li className="list-none group">
                        <Link
                            to="/about"
                            className="border-b-2 border-transparent group-[.active]:border-stone-700 group-hover:border-stone-700"
                        >
                            About
                        </Link>
                    </li>
                </div>
            </nav>
        </header>
    );
}

export default Header;
