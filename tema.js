// Tema compartilhado — aplica e persiste entre todas as páginas
(function () {
  const html = document.documentElement;
  const saved = localStorage.getItem("nuar-theme") || "light";
  html.setAttribute("data-theme", saved);

  document.addEventListener("DOMContentLoaded", function () {
    const btn = document.getElementById("themeBtn");
    if (!btn) return;
    btn.textContent = saved === "dark" ? "☀️" : "🌙";
    btn.addEventListener("click", function () {
      const next = html.getAttribute("data-theme") === "dark" ? "light" : "dark";
      html.setAttribute("data-theme", next);
      btn.textContent = next === "dark" ? "☀️" : "🌙";
      localStorage.setItem("nuar-theme", next);
    });
  });
})();
