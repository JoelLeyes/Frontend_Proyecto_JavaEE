// Aplica el tema guardado — funciona tanto en <head> como en <body>
(function () {
  function applyTheme() {
    if (document.body && localStorage.getItem('nexolab_theme') === 'dark') {
      document.body.classList.add('dark');
    }
  }
  // Si el body ya existe (script en <body>) aplica de inmediato
  if (document.body) {
    applyTheme();
  } else {
    // Script en <head>: esperar al DOM
    document.addEventListener('DOMContentLoaded', applyTheme);
  }
})();

function initThemeToggle(btnId) {
  const btn = document.getElementById(btnId);
  if (!btn) return;
  updateToggleIcon(btn);
  btn.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    const isDark = document.body.classList.contains('dark');
    localStorage.setItem('nexolab_theme', isDark ? 'dark' : 'light');
    updateToggleIcon(btn);
  });
}

function updateToggleIcon(btn) {
  const isDark = document.body.classList.contains('dark');
  btn.innerHTML = isDark
    ? '<i class="bi bi-sun-fill"></i>'
    : '<i class="bi bi-moon-fill"></i>';
  btn.title = isDark ? 'Modo claro' : 'Modo oscuro';
}
