import onlineImage from "@/shared/assets/online.jpg";
import presencialImage from "@/shared/assets/presencial.jpg";
import profileImage from "@/shared/assets/profile.jpg";
import ServiceCard from "@/shared/components/ServiceCard/ServiceCard";

import "./shared/theme/global.style.css";
import { redirectToWhatsApp } from "./shared/utils/redirectWhatsapp";

function App() {
  return (
    <div className="w-[100vw] h-[100%] bg-[#f9dbdd] flex justify-center items-center overflow-x-hidden">
      <div className="w-[100vw] lg:w-[50vw] h-[100%]  p-10 text-[#3c2115]">
        <div className="w-full flex flex-row justify-between items-center">
          <p className="text-2xl font-semibold">Psi Amanda Gomes</p>
          <div className="h-[100px] w-[100px] rounded-full bg-white overflow-hidden">
            <img
              className="h-full w-full object-cover object-center transform scale-150 -translate-y-7"
              src={profileImage}
              alt="Psicanalista Amanda Gomes"
            />
          </div>
        </div>
        <div className="py-12">
          <p className="text-[2.5rem] font-semibold pb-10">
            Quando tudo parece pesado demais, é aqui que você pode falar 🤍
          </p>
          <div className="flex flex-col gap-6 text-xl font-normal">
            <p>Sou Amanda Gomes, psicanalista.</p>
            <p>
              Acompanho mulheres que lidam com ansiedade, autocobrança,
              insegurança e a sensação constante de não serem boas o bastante,
              também aquelas que tem o desejo de se conhecer mais a fundo.
            </p>
            <div className="flex flex-col gap-6">
              <p>Talvez você se identifique com algumas dessas situações:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Ansiedade que não desliga</li>
                <li>Medo de errar e decepcionar</li>
                <li>Comparações constantes</li>
                <li>Sensação de estar atrasada na vida</li>
                <li>Dificuldade de se ouvir e saber o que sente</li>
                <li>Cansaço emocional mesmo sendo jovem</li>
              </ul>
              <p>
                Se você sente que está sempre tentando dar conta de tudo, a
                terapia pode ser um espaço de respiro.
              </p>
            </div>
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
                  o 9º semestre na Universidade de Sorocaba (UNISO).
                </li>
                <li>
                  <strong>Experiência Clínica:</strong> 4 anos de atendimento a
                  adolescentes e adultos.
                </li>
                <li>
                  <strong>Apoio Personalizado:</strong> Acredito que cada pessoa
                  tem sua própria história, por isso meu trabalho é feito de
                  forma individualizada, respeitando o tempo, os limites e a
                  singularidade de cada processo.
                </li>
                <li>
                  <strong>Paixão pela Psicanálise:</strong> A psicanálise, para
                  mim, é um espaço de fala, escuta e elaboração: um lugar onde
                  você pode se permitir sentir, se compreender e construir novos
                  sentidos para sua vida.
                </li>
                <li>
                  <strong>Minha escuta:</strong> é voltada para mulheres que se
                  sentem confusas emocionalmente, inseguras em suas relações e
                  cansadas de tentar dar conta de tudo sozinhas.
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
              title={"Psicoterapia psicanalítica online"}
              description={
                "Atendo suas demandas específicas no conforto e segurança da sua casa, proporcionando acolhimento e escuta qualificada."
              }
              callToAction={"Agendar uma sessão!"}
            />
            <ServiceCard
              image={presencialImage}
              title={"Psicoterapia psicanalítica presencial"}
              description={
                "Atendo suas demandas específicas no meu consultório em Sorocaba, oferecendo um espaço seguro e acolhedor para seu processo terapêutico."
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
