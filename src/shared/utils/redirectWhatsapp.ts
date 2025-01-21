export const redirectToWhatsApp = () => {
  const phoneNumber = "5515998524924";
  const message = encodeURIComponent(
    "Olá, tenho interesse e gostaria de mais informações!"
  );
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${message}`;
  window.open(whatsappLink);
};
