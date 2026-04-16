/**
 * Utilidades para verificar rol de administrador
 */

function isAdmin() {
  return localStorage.getItem('userRole') === 'ADMINISTRADOR';
}

function showAdminElements() {
  document.querySelectorAll('[data-admin-only]').forEach(el => {
    if (isAdmin()) {
      el.classList.remove('d-none');
    } else {
      el.classList.add('d-none');
    }
  });
}

function restrictAdminAccess() {
  if (!isAdmin()) {
    alert('Acceso denegado: Solo administradores');
    window.location.href = 'index.html';
  }
}

function getAuthHeader() {
  return {
    'Authorization': `Bearer ${localStorage.getItem('token')}`,
    'Content-Type': 'application/json'
  };
}

// Ejecutar al cargar la página
document.addEventListener('DOMContentLoaded', showAdminElements);
