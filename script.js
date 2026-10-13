<<<<<<< HEAD
// 페이지가 열리면 콘솔에 인사
console.log("홍길동의 자기소개 사이트에 오신 걸 환영합니다!");

// 푸터에 올해 연도 자동 표시
document.getElementById("year").textContent = new Date().getFullYear();
=======
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
>>>>>>> 002702b3a95fef6d48c8acef1af387bb6c58d1e8
