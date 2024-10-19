import ServiceCard from "./shared/components/ServiceCard/ServiceCard";
import "./shared/theme/global.style.css";

function App() {
  return (
    <div className="w-[100vw] h-[100%] bg-[#f9dbdd] flex justify-center items-center">
      <div className="w-[100vw] lg:w-[50vw] h-[100%]  p-10 text-[#3c2115]">
        <div className="w-full flex flex-row justify-between items-center">
          <p className="text-2xl font-semibold">Psi Amanda Gomes</p>
          <div className="h-[100px] w-[100px] rounded-full bg-white"></div>
        </div>
        <div className="py-20">
          <p className="text-[2.5rem] font-semibold pb-2">Prazer, Amanda!</p>
          <div className="flex flex-col gap-6 text-xl font-normal">
            <p>Seja bem vinda ao meu perfil!</p>
            <p>
              Por aqui eu falo sobre ansiedade, hábitos saudáveis, organização
              de rotina e muito mais!
            </p>
            <p>
              Também compartilho meu dia a dia, meus estudos, treinos, hobbies
              (sou viciada em livros da Colleen Hoover) e reflexões!
            </p>
            <p>
              É uma honra ter você aqui e poder contribuir para a construção de
              uma vida que vale a pena ser vivida. Vamos juntas?
            </p>
            <div className="flex rounded-3xl justify-center items-center w-72 px-8 py-4 bg-[#008475] text-[#f9dbdd]">
              <p className="text-sm font-semibold">Agende sua sessão comigo</p>
            </div>
          </div>
        </div>
        <div>
          <div className="w-full h-[300px] bg-white"></div>
          <div className="flex flex-col gap-6 py-10">
            <p className="text-lg font-semibold">Apresentação</p>
            <p className="text-4xl font-semibold">Sobre mim:</p>
            <p>✨ Meu nome é Amanda Fontes Gomes</p>
            <div>
              <p>👩🏻‍🎓| Sou psicóloga (CRP 06/184887)</p>
              <p>
                📚| Especialista em Terapia Cognitivo Comportamental pela PUC-RS
              </p>
              <p>
                📚| Formada em Terapia Comportamental Dialética e Obesidade e
                Emagrecimento pelo GrupoPBE
              </p>
              <p>📚| Pós graduanda em Psicopatologia</p>
              <p>
                📚| Aprimorada em Terapia Cognitivo Comportamental para os
                Transtornos de Ansiedade.
              </p>
            </div>
            <p>
              🌎 Atualmente, atendo pacientes do mundo inteiro de forma online e
              também dou supervisão clínica para psicólogas!
            </p>
            <p>⚠️ Não atendo convênio!</p>
          </div>
        </div>
        <div className="h-full">
          <p className="text-lg font-semibold pb-8 pt-10">Meus Serviços</p>
          <div
            className="flex gap-8 overflow-x-scroll overflow-y-hidden"
            style={{ scrollbarWidth: "none" }}
          >
            <ServiceCard image={""} description={""} callToAction={""} />
            <ServiceCard image={""} description={""} callToAction={""} />
            <ServiceCard image={""} description={""} callToAction={""} />
            <ServiceCard image={""} description={""} callToAction={""} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
