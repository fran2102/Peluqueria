// Esperar a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('themeToggle');
    const moonIcon = document.querySelector('.moon-icon');
    const sunIcon = document.querySelector('.sun-icon');
    
    // Comprobar si hay una preferencia guardada
    const savedTheme = localStorage.getItem('theme');
    
    // Aplicar el tema guardado o usar la preferencia del sistema
    if (savedTheme === 'dark') {
        enableDarkMode();
    } else if (savedTheme === 'light') {
        enableLightMode();
    } else {
        // Si no hay preferencia guardada, usar la preferencia del sistema
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            enableDarkMode();
        }
    }
    
    // Función para activar el modo oscuro
    function enableDarkMode() {
        document.body.classList.add('dark-mode');
        moonIcon.style.display = 'none';
        sunIcon.style.display = 'block';
        localStorage.setItem('theme', 'dark');
    }
    
    // Función para activar el modo claro
    function enableLightMode() {
        document.body.classList.remove('dark-mode');
        moonIcon.style.display = 'block';
        sunIcon.style.display = 'none';
        localStorage.setItem('theme', 'light');
    }
    
    // Cambiar el tema cuando se hace clic en el botón
    themeToggle.addEventListener('click', function() {
        if (document.body.classList.contains('dark-mode')) {
            enableLightMode();
        } else {
            enableDarkMode();
        }
    });
    
    // Escuchar cambios en la preferencia del sistema
    if (window.matchMedia) {
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
            if (!localStorage.getItem('theme')) { // Solo si el usuario no ha establecido una preferencia
                if (e.matches) {
                    enableDarkMode();
                } else {
                    enableLightMode();
                }
            }
        });
    }
});
document.addEventListener('DOMContentLoaded', function() {
    // Función para obtener parámetros de la URL
    function getUrlParameter(name) {
        name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
        var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
        var results = regex.exec(location.search);
        return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
    }

    // Si estamos en la página de reservas
    if (window.location.pathname.includes('reservas.html')) {
        // Obtener el parámetro 'sala' de la URL
        var salaParam = getUrlParameter('sala');
        
        if (salaParam) {
            // Obtener el elemento select de salón
            var salonSelect = document.getElementById('salon');
            
            // Si existe el elemento
            if (salonSelect) {
                // Establecer el valor directamente
                salonSelect.value = salaParam.toLowerCase();
            }
        }
    }
});