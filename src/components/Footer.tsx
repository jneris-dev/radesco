function Footer() {
  return (
    <footer className="w-full h-auto py-12 relative">
      <div className="md:container flex gap-10 mx-auto sm:px-12 px-6 flex-wrap lg:justify-start md:justify-center">
        <div className="flex flex-col gap-2">
          <p className="text-lg">- Follow me</p>
          <ul className="flex gap-3 text-stone-400 dark:text-stone-300 ps-2.5">
            <li className="group">
              <a
                href="https://www.instagram.com/rafaelradesco/"
                target="_blank"
                className="group-hover:text-stone-900 dark:group-hover:text-blue-magenta-200"
              >
                Instagram
              </a>
            </li>
            <li className="group">
              <a
                href="https://www.linkedin.com/in/radesco/"
                target="_blank"
                className="group-hover:text-stone-900 dark:group-hover:text-blue-magenta-200"
              >
                Linkedin
              </a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-lg">- Let's Start a project</p>
          <a
            href="mailto:radesco@gmail.com"
            className="text-stone-400 dark:text-stone-300 ps-2.5 hover:text-stone-900 dark:hover:text-blue-magenta-200"
          >
            radesco@gmail.com
          </a>
        </div>
        <div className="ms-auto self-end lg:w-auto w-full lg:text-end text-center">
          <p className="text-sm">
            ©2025 Radesco. All rights reserved. Create by{" "}
            <a
              href="http://silphcode.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold border-b border-transparent hover:border-stone-900 dark:hover:border-blue-magenta-200"
            >
              SilphCode
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
