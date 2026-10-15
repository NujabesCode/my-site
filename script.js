// 다크모드 토글 (선택은 localStorage에 저장)
const THEME_KEY = "theme";
const root = document.documentElement;
const darkQuery = window.matchMedia("(prefers-color-scheme: dark)");

function getStoredTheme() {
  try {
    return localStorage.getItem(THEME_KEY);
  } catch (e) {
    return null;
  }
}

function currentTheme() {
  return root.dataset.theme || (darkQuery.matches ? "dark" : "light");
}

const themeToggle = document.createElement("button");
themeToggle.type = "button";
themeToggle.className = "theme-toggle";

function updateToggle() {
  const isDark = currentTheme() === "dark";
  themeToggle.textContent = isDark ? "☀️" : "🌙";
  themeToggle.setAttribute("aria-label", isDark ? "라이트 모드로 전환" : "다크 모드로 전환");
}

const storedTheme = getStoredTheme();
if (storedTheme === "dark" || storedTheme === "light") {
  root.dataset.theme = storedTheme;
}

themeToggle.addEventListener("click", () => {
  const next = currentTheme() === "dark" ? "light" : "dark";
  root.dataset.theme = next;
  try {
    localStorage.setItem(THEME_KEY, next);
  } catch (e) {
    // 저장 실패(비공개 모드 등) 시 이번 방문에만 적용
  }
  updateToggle();
});

// 저장된 선택이 없을 때 시스템 설정이 바뀌면 아이콘도 갱신
darkQuery.addEventListener("change", updateToggle);

updateToggle();
document.body.appendChild(themeToggle);

// 푸터에 현재 연도 표시
const yearEl = document.getElementById("year");
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

// 스크롤 시 섹션이 부드럽게 나타나도록 처리
const sections = document.querySelectorAll(".section");

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  sections.forEach((section) => observer.observe(section));
} else {
  sections.forEach((section) => section.classList.add("visible"));
}
