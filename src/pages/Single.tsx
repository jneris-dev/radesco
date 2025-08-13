import { Link, useParams } from "react-router-dom";

import Layout from "../components/Layout";
import Navigation from "../components/Navigation";

import { projects } from "../util/projects";
import type { Art, Project } from "../interface/interfaces";
import { useEffect, useState } from "react";

function Single() {
    const { slug } = useParams<{ slug: string }>();
    const [project, setProject] = useState<Project>();

    useEffect(() => {
        setProject(projects.find((item) => item.slug === slug));
    }, [slug]);

    if (!project)
        return (
            <Layout>
                <div className="w-full h-dvh flex items-center justify-center gap-3">
                    <h1>Projeto não encontrado</h1>
                    <Link to="/">Retornar ao início</Link>
                </div>
            </Layout>
        );

    return (
        <Layout>
            <section className="w-full h-auto relative">
                <div className="container mx-auto md:min-h-[300px] flex justify-center items-center sm:px-12 px-6">
                    <div className="w-full flex md:flex-row flex-col md:justify-between md:items-center gap-5 py-12">
                        <h1 className="text-4xl">{project.name}</h1>
                        <div className="lg:w-1/3 md:w-1/2 w-full">
                            <p>{project.description}</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="w-full h-auto relative pb-8">
                <div className="container mx-auto sm:px-12 px-6">
                    <div className="grid md:grid-cols-2 grid-cols-1 lg:gap-14 md:gap-8 gap-4">
                        {project.arts.map((art: Art) => {
                            return (
                                <div
                                    className={
                                        art.id < 1 ? "md:col-span-2" : "col-span-1"
                                    }
                                    key={art.id}
                                >
                                    <picture>
                                        <img
                                            src={art.art}
                                            alt={art.title}
                                            className="max-w-full object-cover w-full"
                                        />
                                    </picture>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            <section className="w-full h-auto relative">
                <div className="container mx-auto py-12 sm:px-12 px-6">
                    <Navigation data={projects} current={project.id} />
                </div>
            </section>
        </Layout>
    );
}

export default Single;
