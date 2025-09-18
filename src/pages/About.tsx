import Layout from "../components/Layout";

function About() {
  return (
    <Layout>
      <section className="w-full h-auto relative md:py-24 py-14 flex-1">
        <div className="container mx-auto sm:px-12 px-6">
          <div className="flex md:flex-row flex-col gap-5 w-full">
            <div className="md:w-1/4 w-full">
              <img
                src="/assets/profile.png"
                className="max-w-full h-auto w-full"
                alt="Rafael Radesco - Creative Director"
              />
            </div>
            <div className="md:w-3/4 w-full flex flex-col gap-2 lg:text-lg">
              <p>Oi, eu sou o Rafael.</p>
              <p>
                Se você chegou até aqui é porque já criamos juntos ou ainda
                vamos bolar alguma boa ideia. (A opção de eu estar falando
                sozinho não vale).
              </p>
              <p>
                Há um bom tempo, eu conto histórias. Me formei em Jornalismo e
                depois me reformei na Publicidade. Atrás das câmeras, já fui
                produtor, assistente de direção, me arrisquei em roteiros e
                digeri alguns projetos.
              </p>
              <p>
                Nesse caminho, criei para marcas como MasterCard, Le Creuset,
                Vitaminas Sundown, ESPN, St Marche, YPF, Consigaz, Dell,
                Tupperware, Café Três Corações, Pravaler, Bayer, entre outras.
              </p>
              <p>
                Caso já rolou de trabalhamos no mesmo time, você sabe como
                funciona... Se ainda não, essa é a deixa: me chama e vamos
                começar algo novo.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default About;
