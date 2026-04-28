// Aplica el tema guardado antes de que el DOM renderice (evita flash)
(function () {
  if (localStorage.getItem('nexolab_theme') === 'dark') {
    document.body.classList.add('dark');
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
