const toggle = document.getElementById('themeToggle');

toggle.addEventListener('click', () => {
  const isLight = document.documentElement.dataset.theme === 'light';
  document.documentElement.dataset.theme = isLight ? '' : 'light';
  toggle.setAttribute('aria-pressed', String(!isLight));
});
