import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import { projects } from "../util/projects";
import type { Project } from "../interface/interfaces";

function Home() {
    return (
        <Layout>
            <section className="w-full h-auto relative">
                <div className="container w-full mx-auto md:min-h-[588px] flex items-center justify-center py-12 sm:px-12 px-6">
                    <div className="max-w-[920px] flex flex-col gap-10">
                        <p className="md:text-5xl sm:text-3xl text-2xl font-medium">
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Corrupti quis temporibus aliquid inventore
                            praesentium ducimus veniam reprehenderit ad pariatur
                            ipsam
                        </p>
                        <p className="sm:text-2xl text-lg">Scroll down to see my work!</p>
                    </div>
                </div>
            </section>
            <section className="w-full h-auto relative">
                <div className="grid md:grid-cols-2 grid-cols-1">
                    {projects.map((item: Project) => {
                        return (
                            <div className="relative group" key={item.id}>
                                <Link to={`/project/${item.slug}`}>
                                    <picture>
                                        <img
                                            src={item.thumbnail}
                                            alt={item.name}
                                            className="max-w-full object-cover"
                                        />
                                    </picture>
                                    <div className="absolute inset-0 w-full h-full flex items-center justify-center bg-stone-100/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                        <div className="flex flex-col items-center justify-center cursor-pointer w-full h-full">
                                            <h2 className="text-6xl">
                                                {item.name}
                                            </h2>
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
