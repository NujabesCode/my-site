// 페이지가 열리면 콘솔에 인사
console.log("홍길동의 자기소개 사이트에 오신 걸 환영합니다!");

// 푸터에 올해 연도 자동 표시
document.getElementById("year").textContent = new Date().getFullYear();

// 다크모드 토글 (선택은 localStorage 에 저장)
const THEME_KEY = "theme";
const toggle = document.createElement("button");
toggle.className = "theme-toggle";
toggle.type = "button";
document.querySelector(".site-header").prepend(toggle);

function applyTheme(theme) {
  document.documentElement.dataset.theme = theme;
  toggle.textContent = theme === "dark" ? "☀️ 라이트" : "🌙 다크";
  toggle.setAttribute("aria-label", theme === "dark" ? "라이트 모드로 전환" : "다크 모드로 전환");
}

let savedTheme = null;
try {
  savedTheme = localStorage.getItem(THEME_KEY);
} catch (e) {}
applyTheme(savedTheme === "dark" ? "dark" : "light");

toggle.addEventListener("click", () => {
  const next = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
  applyTheme(next);
  try {
    localStorage.setItem(THEME_KEY, next);
  } catch (e) {}
});
