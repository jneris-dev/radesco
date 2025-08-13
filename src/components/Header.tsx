import { Link, NavLink } from "react-router-dom";

function Header() {
    return (
        <header className="w-full h-auto py-4">
            <nav className="container w-full flex justify-between mx-auto items-center sm:px-12 px-6">
                <div className="flex flex-col">
                    <Link to="/">
                        <h1 className="text-2xl font-semibold">
                            Rafael Radesco
                        </h1>
                        <p className="uppercase tracking-widest text-sm">
                            Creative Director
                        </p>
                    </Link>
                </div>
                <div className="flex gap-4 text-xl">
                    <li className="list-none">
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                (isActive
                                    ? "border-stone-700"
                                    : "border-transparent") +
                                " border-b-2 hover:border-stone-700"
                            }
                        >
                            Work
                        </NavLink>
                    </li>
                    <li className="list-none">
                        <NavLink
                            to="/about"
                            className={({ isActive }) =>
                                (isActive
                                    ? "border-stone-700"
                                    : "border-transparent") +
                                " border-b-2 hover:border-stone-700"
                            }
                        >
                            About
                        </NavLink>
                    </li>
                </div>
            </nav>
        </header>
    );
}

export default Header;
