// Change & Save Theme To Local Storage
const themeBtn = document.querySelector(".theme_btn");
themeBtn.addEventListener("click", () => {
  if (document.body.className == "") {
    document.body.className = "dark";
    localStorage.setItem("portfolio_theme", "dark");
    themeBtn.innerHTML = `<i class="ph ph-sun"></i>`;
  } else {
    document.body.className = "";
    localStorage.setItem("portfolio_theme", "");
    themeBtn.innerHTML = `<i class="ph ph-moon"></i>`;
  }
});

// Get Theme From Local Storage & Apply On Page Load
window.addEventListener("load", () => {
  const savedTheme = localStorage.getItem("portfolio_theme") || "";
  document.body.className = savedTheme;
  if (document.body.className == "") {
    themeBtn.innerHTML = `<i class="ph ph-moon"></i>`;
  } else {
    themeBtn.innerHTML = `<i class="ph ph-sun"></i>`;
  }
});
