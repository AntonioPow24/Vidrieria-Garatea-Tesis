export const formatFullDate = (dateTimeString) => {
    const date = new Date(dateTimeString);

    const dayName = date.toLocaleDateString('es-ES', { weekday: 'long' });
    const monthName = date.toLocaleDateString('es-ES', { month: 'long' });
    const day = date.getDate().toString().padStart(2, '0');
    const year = date.getFullYear();

    // Capitaliza primera letra de día y mes
    const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

    return `${capitalize(dayName)}, ${capitalize(monthName)} ${day}, ${year}`;
}

export const formatTime = (dateTimeString) => {
    const date = new Date(dateTimeString);

    return date.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
    });
}