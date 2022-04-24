// La vida moderna; 8x37
const messages = [
    "Las pajas",
    "La pachamama",
    "Hola, soy Vicente del Bosque",
    "España",
    "Jaime, el hombre",
    "El chiste que se ve venir",
    "Día de la resistencia indígena",
    "El concurso del baño",
    "Héctor deja de fumar",
    "El remplaçament",
    "La impotençia",
    "Lo de Zaragoza",
    "Francisco Frankenstein",
    "Gora Moderdonia Eskatuta",
    "Pasaron muchas cosas en Valencia",
    "Putos yayos",
    "Pulse almohadilla para devolver la llamada"
];

const randomMsg = () => {
    const msg = messages[Math.floor(Math.random() * messages.length)];
    console.log(msg);
}

export default { randomMsg }