fetch("./nav.html")
  .then(response => response.text())
  .then(html => {
    document.getElementById("nav").innerHTML = html;
    initThemeToggle();
  });

fetch("./footer.html")
  .then(response => response.text())
  .then(html => {
    document.getElementById("footer").innerHTML = html;
  });
