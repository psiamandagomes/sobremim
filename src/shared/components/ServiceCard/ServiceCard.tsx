import { redirectToWhatsApp } from "@/shared/utils/redirectWhatsapp";

interface ServiceCardProps {
  image: string;
  title: string;
  description: string;
  callToAction: string;
  actionMessage?: string;
}

export default function ServiceCard({
  description,
  title,
  image,
  callToAction,
}: Readonly<ServiceCardProps>) {
  return (
    <div
      className="flex flex-col bg-[#ffa6ac] cursor-pointer rounded-3xl min-w-72"
      onClick={() => redirectToWhatsApp()}
    >
      <img
        src={image}
        alt={title}
        className="w-full h-96 bg-white rounded-t-3xl object-bottom object-cover"
      />
      <div className="py-10 px-6 flex flex-col h-full justify-between">
        <div className="flex flex-col pb-6 gap-4">
          <p className="text-xl font-semibold">{title}</p>
          <p>{description}</p>
        </div>
        <div>
          <p className="text-lg font-semibold underline">{callToAction}</p>
        </div>
      </div>
    </div>
  );
}
