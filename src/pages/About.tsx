import Layout from "../components/Layout";

function About() {
  return (
    <Layout>
      <section className="about w-full h-auto relative md:py-24 py-14 flex-1">
        <div className="container mx-auto sm:px-12 px-6 max-w-6xl">
          <div className="flex md:flex-row flex-col gap-5 w-full">
            <div className="md:w-2/5 w-full">
              <img
                src="/assets/profile.jpg"
                className="max-w-full h-auto w-full"
                alt="Rafael Radesco - Creative Director"
              />
            </div>
            <div className="flex-1 w-full flex flex-col gap-6 lg:text-lg">
              <p className="text-4xl">Oi, eu sou o Rafael.</p>
              <p>
                Se você chegou até aqui é porque já criamos juntos
                <br />
                ou ainda vamos bolar alguma boa ideia.
                <br />
                (A opção de eu estar falando sozinho não vale).
              </p>
              <p>
                Há um bom tempo, eu conto histórias.
                <br />
                Me formei em Jornalismo e depois me reformei na Publicidade.
                <br />
                Atrás das câmeras, já fui produtor, assistente de direção,
                <br />
                me arrisquei em roteiros e digeri alguns projetos.
              </p>
              <p>
                Nesse caminho, criei para marcas como MasterCard, Le Creuset,
                <br />
                Vitaminas Sundown, ESPN, St Marche, YPF, Consigaz, Dell,
                <br />
                Tupperware, Café Três Corações, Pravaler, Bayer, entre outras.
              </p>
              <p>
                Caso já rolou de trabalhamos no mesmo time,
                <br />
                você sabe como funciona... Se ainda não, essa é a deixa:
                <br />
                me chama e vamos começar algo novo.
              </p>
              <div className="flex gap-4">
                <a
                  href="https://www.instagram.com/rafaelradesco/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="decoration-0"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="fill-blue-magenta-400 hover:fill-blue-magenta-300 w-8 h-8"
                  >
                    <path d="M14.667 12c0 1.473-1.194 2.667-2.667 2.667-1.473 0-2.667-1.193-2.667-2.667 0-1.473 1.194-2.667 2.667-2.667 1.473 0 2.667 1.194 2.667 2.667zm3.846-3.232c.038.843.046 1.096.046 3.232s-.008 2.389-.046 3.233c-.1 2.15-1.109 3.181-3.279 3.279-.844.038-1.097.047-3.234.047-2.136 0-2.39-.008-3.232-.046-2.174-.099-3.181-1.132-3.279-3.279-.039-.845-.048-1.098-.048-3.234s.009-2.389.047-3.232c.099-2.152 1.109-3.181 3.279-3.279.844-.039 1.097-.047 3.233-.047s2.39.008 3.233.046c2.168.099 3.18 1.128 3.28 3.28zm-2.405 3.232c0-2.269-1.84-4.108-4.108-4.108-2.269 0-4.108 1.839-4.108 4.108 0 2.269 1.84 4.108 4.108 4.108 2.269 0 4.108-1.839 4.108-4.108zm1.122-4.27c0-.53-.43-.96-.96-.96s-.96.43-.96.96.43.96.96.96c.531 0 .96-.43.96-.96zm6.77-7.73v24h-24v-24h24zm-4 12c0-2.172-.009-2.445-.048-3.298-.131-2.902-1.745-4.52-4.653-4.653-.854-.04-1.126-.049-3.299-.049s-2.444.009-3.298.048c-2.906.133-4.52 1.745-4.654 4.653-.039.854-.048 1.127-.048 3.299 0 2.173.009 2.445.048 3.298.134 2.906 1.746 4.521 4.654 4.654.854.039 1.125.048 3.298.048s2.445-.009 3.299-.048c2.902-.133 4.522-1.745 4.653-4.654.039-.853.048-1.125.048-3.298z" />
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/in/radesco/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="fill-blue-magenta-400 hover:fill-blue-magenta-300 w-8 h-8"
                  >
                    <path d="M0 0v24h24v-24h-24zm8 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.397-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default About;
