import { Link } from "react-router-dom";

function NotFound() {
  return (
    <main className="w-full h-dvh relative flex items-center justify-center flex-col p-4 gap-10">
      <div className="flex flex-col gap-5 text-center">
        <h1 className="md:text-5xl text-3xl">404 - Page Not Found</h1>
        <p>A página que você está procurando não existe.</p>
      </div>
      <Link
        to="/"
        className="border-b-2 border-transparent hover:border-stone-700"
      >
        Voltar para a Home
      </Link>
    </main>
  );
}

export default NotFound;
