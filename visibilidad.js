// Función para mostrar la sección seleccionada
function mostrarSeccion(seccionId) {
    // Ocultar todas las secciones
    document.querySelectorAll('section').forEach((section) => {
      section.classList.add('oculto');
    });
    
    // Mostrar la sección seleccionada
    document.getElementById(seccionId).classList.remove('oculto');
  }
  
  // Mostrar "Diseños" por defecto
  document.getElementById('diseños').classList.remove('oculto');
  