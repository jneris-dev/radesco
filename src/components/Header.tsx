function Header() {
    return (
        <header className="w-full h-auto py-4 sticky inset-0 z-10">
            <nav className="container w-full flex justify-between mx-auto items-center">
                <div className="flex flex-col">
                    <h1 className="text-2xl font-semibold">Rafael Radesco</h1>
                    <p className="uppercase tracking-widest text-sm">
                        Creative Director
                    </p>
                </div>
                <div className="flex gap-4 text-xl">
                    <li className="list-none group active">
                        <a
                            href="#"
                            className="border-b-2 border-transparent group-[.active]:border-stone-700 group-hover:border-stone-700"
                        >
                            Work
                        </a>
                    </li>
                    <li className="list-none group">
                        <a
                            href="#"
                            className="border-b-2 border-transparent group-[.active]:border-stone-700 group-hover:border-stone-700"
                        >
                            About
                        </a>
                    </li>
                </div>
            </nav>
        </header>
    );
}

export default Header;
