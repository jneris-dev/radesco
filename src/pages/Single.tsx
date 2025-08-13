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
                <div className="container mx-auto min-h-[300px] flex justify-center items-center">
                    <div className="w-full flex justify-between items-center py-12">
                        <h1 className="text-4xl">{project.name}</h1>
                        <div className="w-1/3">
                            <p>{project.description}</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="w-full h-auto relative pb-8">
                <div className="container mx-auto">
                    <div className="grid grid-cols-2 gap-14">
                        {project.arts.map((art: Art) => {
                            return (
                                <div
                                    className={
                                        art.id < 1 ? "col-span-2" : "col-span-1"
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
                <div className="container mx-auto py-12">
                    <Navigation data={projects} current={project.id} />
                </div>
            </section>
        </Layout>
    );
}

export default Single;
