// Función para ocultar el botón de reserva en la página de reservas
document.addEventListener('DOMContentLoaded', function() {
    // Verificar si estamos en la página de reservas
    const isReservasPage = window.location.pathname.includes('reservas.html');
    
    // Obtener el botón de reserva
    const reserveButton = document.querySelector('.reserve-button');
    
    // Si estamos en la página de reservas y el botón existe, ocultarlo
    if (isReservasPage && reserveButton) {
        reserveButton.style.display = 'none';
    }
});