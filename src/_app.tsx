import ServiceCard from "./shared/components/ServiceCard/ServiceCard";
import profileImage from "@/shared/assets/profile.png";
import onlineImage from "@/shared/assets/online.png";
import kidsImage from "@/shared/assets/kids.png";
import adultsImage from "@/shared/assets/adults.png";
import teensImage from "@/shared/assets/teens.png";
import "./shared/theme/global.style.css";
import { redirectToWhatsApp } from "./shared/utils/redirectWhatsapp";

function App() {
  return (
    <div className="w-[100vw] h-[100%] bg-[#f9dbdd] flex justify-center items-center overflow-x-hidden">
      <div className="w-[100vw] lg:w-[50vw] h-[100%]  p-10 text-[#3c2115]">
        <div className="w-full flex flex-row justify-between items-center">
          <p className="text-2xl font-semibold">Psi Amanda Gomes</p>
          <div className="h-[100px] w-[100px] rounded-full bg-white">
            <img
              className="h-[100px] w-[100px] rounded-full self-center"
              src={profileImage}
              alt="Psicanalista Amanda Gomes"
            />
          </div>
        </div>
        <div className="py-20">
          <p className="text-[2.5rem] font-semibold pb-2">Prazer, Amanda!</p>
          <div className="flex flex-col gap-6 text-xl font-normal">
            <p>Sejam bem vindos ao meu perfil!</p>
            <p>
              Aqui, eu falo sobre terapia psicanalítica, coisas de psicanálise,
              autoconhecimento, dicas e reflexões.
            </p>
            <p>
              Também compartilho meu dia a dia, meus atendimentos e estudos.
            </p>
            <p>
              É uma honra ter você aqui e poder contribuir para a construção de
              uma vida que vale a pena ser vivida, entendendo as questões
              inconscientes que impactam nossas vidas. Vamos juntos?
            </p>
            <div
              className="flex rounded-3xl justify-center items-center w-72 px-8 py-4 bg-[#008475] text-[#f9dbdd]"
              onClick={() => redirectToWhatsApp()}
            >
              <p className="text-sm font-semibold">Agende sua sessão comigo</p>
            </div>
          </div>
        </div>
        <div>
          <div className="flex flex-col gap-6 pb-10">
            <p className="text-4xl font-semibold">Sobre mim:</p>
            <p>✨ Meu nome é Amanda Fontes Gomes</p>
            <div>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong>Formação em Psicanálise:</strong> Graduada pelo
                  Instituto Perlabore de Psicanálise (CPP 2340/SP).
                </li>
                <li>
                  <strong>Estudante de Psicologia:</strong> Atualmente cursando
                  o 8º semestre na UNISO.
                </li>
                <li>
                  <strong>Experiência Clínica:</strong> Mais de 2 anos de
                  atendimento a crianças, adolescentes e adultos.
                </li>
                <li>
                  <strong>Apoio Personalizado:</strong> Acompanho cada caso de
                  forma diferenciada, utilizando ferramentas específicas para
                  cada demanda.
                </li>
                <li>
                  <strong>Paixão pela Psicanálise:</strong> Amo ajudar as
                  pessoas a desvendar suas questões internas e promover
                  autoconhecimento.
                </li>
              </ul>
            </div>
            <p>
              Atualmente, atendo presencialmente em Sorocaba e também online
              para o mundo todo.
            </p>
          </div>
        </div>
        <div className="h-full">
          <p className="text-lg font-semibold pb-8">Meus Serviços</p>
          <div
            className="flex gap-8 overflow-x-scroll overflow-y-hidden"
            style={{ scrollbarWidth: "none" }}
          >
            <ServiceCard
              image={onlineImage}
              title={"Psicoterapia online"}
              description={
                "Atendo suas demandas específicas no conforto e segurança da sua casa, proporcionando acolhimento e escuta qualificada."
              }
              callToAction={"Começar Agora!"}
            />
            <ServiceCard
              image={teensImage}
              title={"Psicoterapia com adolescentes"}
              description={
                "Facilito uma comunicação mais saudável entre o adolescente e seus pais, além de ajudar o jovem a entender os desafios dessa fase com o uso de ferramentas criativas e eficazes."
              }
              callToAction={"Começar Agora!"}
            />
            <ServiceCard
              image={kidsImage}
              title={"Psicoterapia com crianças"}
              description={
                "A partir da demanda apresentada pelos pais, auxilio a criança a lidar com seus conflitos internos, ajudando-a a expressar e entender suas emoções com ferramentas lúdicas e brincadeiras."
              }
              callToAction={"Começar Agora!"}
            />
            <ServiceCard
              image={adultsImage}
              title={"Psicoterapia com adultos"}
              description={
                "Ofereço apoio para demandas específicas, criando um ambiente seguro de autoconhecimento, acolhimento e superação de traumas."
              }
              callToAction={"Começar Agora!"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
