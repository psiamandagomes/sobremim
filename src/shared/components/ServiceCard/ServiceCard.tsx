interface ServiceCardProps {
  image: string;
  description: string;
  callToAction: string;
}

export default function ServiceCard({}: ServiceCardProps) {
  return (
    <div className="flex flex-col bg-[#ffa6ac] cursor-pointer rounded-3xl min-w-72">
      <div className="w-full h-60 bg-white rounded-t-3xl">teste</div>
      <div className="py-10 px-6">
        <div className="flex flex-col pb-6 gap-4">
          <p className="text-xl font-semibold">Psicoterapia online 🌍</p>
          <p>
            Faça terapia de qualquer lugar do mundo e veja sua vida se
            transformar ✨
          </p>
        </div>
        <div>
          <p className="text-lg font-semibold underline">Agende aqui!</p>
        </div>
      </div>
    </div>
  );
}
