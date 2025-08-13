import Layout from "../components/Layout";

function Home() {
    return (
        <Layout>
            <section className="w-full h-auto relative">
                <div className="container w-full mx-auto min-h-[588px] flex items-center justify-center py-12">
                    <div className="max-w-[920px] flex flex-col gap-10">
                        <p className="text-5xl font-medium">
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Corrupti quis temporibus aliquid inventore
                            praesentium ducimus veniam reprehenderit ad pariatur
                            ipsam
                        </p>
                        <p className="text-2xl">Scroll down to see my work!</p>
                    </div>
                </div>
            </section>
            <section className="w-full h-auto relative">
                <div className="grid grid-cols-2">
                    {[...Array(8)].map((_i: any, k: number) => {
                        return (
                            <div className="relative group" key={k}>
                                <picture>
                                    <img
                                        src={"https://placehold.co/953x714"}
                                        alt=""
                                        className="max-w-full object-cover"
                                    />
                                </picture>
                                <div className="absolute inset-0 w-full h-full flex items-center justify-center bg-stone-100/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                    <div className="flex flex-col items-center justify-center cursor-pointer w-full h-full">
                                        <h2 className="text-6xl">
                                            Project {k + 1}
                                        </h2>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </section>
        </Layout>
    );
}

export default Home;
