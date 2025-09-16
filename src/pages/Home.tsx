import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import { projects } from "../util/projects";
import type { Project } from "../interface/interfaces";

function Home() {
  return (
    <Layout>
      <section className="w-full h-auto relative">
        <div className="grid md:grid-cols-2 grid-cols-1">
          {projects.map((item: Project) => {
            return (
              <div className="relative group" key={item.id}>
                <Link to={`/project/${item.slug}`}>
                  <picture>
                    <img
                      src={
                        item.thumbnail.includes("https")
                          ? item.thumbnail
                          : "/assets/projects/" + item.slug + item.thumbnail
                      }
                      alt={item.name}
                      className="max-w-full h-full object-cover"
                    />
                  </picture>
                  <div className="absolute inset-0 w-full h-full flex items-center justify-center bg-stone-100/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="flex flex-col items-center justify-center cursor-pointer w-full h-full">
                      <h2 className="text-6xl">{item.name}</h2>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </section>
    </Layout>
  );
}

export default Home;
