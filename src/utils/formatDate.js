
const months = [
    "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
    "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
];

export const requestFormatDate = ( date ) => {
const parsedDate = new Date(date);
  const day = parsedDate.getDate();
  const month = months[parsedDate.getMonth()];
  const year = parsedDate.getFullYear();

  return `${day} de ${month} ${year}`;
}

export const getCurrentDateBanner = () => {
  const meses = [
    "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
    "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
  ];

  const ahora = new Date();
  const mes = meses[ahora.getMonth()];
  const dia = ahora.getDate();
  const año = ahora.getFullYear();

  let horas = ahora.getHours();
  const minutos = ahora.getMinutes().toString().padStart(2, '0');
  const periodo = horas >= 12 ? "pm" : "am";

  horas = horas % 12 || 12; // convierte 0 en 12 para formato 12 horas

  return `${mes} ${dia}, ${año} ${horas}:${minutos}${periodo}`;
}

export const getHoursMinutes = (date) => {
  const parsedDate = new Date(date);
  const hours = parsedDate.getHours().toString().padStart(2, '0');
  const minutes = parsedDate.getMinutes().toString().padStart(2, '0');

  return `${hours}:${minutes} ${hours >= 12 ? 'pm' : 'am'}`;
}