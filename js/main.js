// =========================================================
// LEAP Landing Page
// =========================================================

// ---------- 후속연구 구글 폼 ----------
// URL이 발행되면 여기에 넣으면 모바일 'Join Me!' 버튼에 연결됨
const GOOGLE_FORM_URL = "";

// iOS Safari에서 터치 시 :active(누름 효과)가 동작하도록
document.addEventListener("touchstart", () => {}, { passive: true });

document.querySelectorAll("[data-form-link]").forEach((link) => {
  if (GOOGLE_FORM_URL) {
    link.href = GOOGLE_FORM_URL;
  } else {
    link.addEventListener("click", (e) => e.preventDefault());
  }
});

// ---------- i18n ----------
const I18N = {
  ko: {
    "nav.background": "연구의 배경 및 목적",
    "nav.design": "디자인",
    "nav.future": "후속연구",
    "bg.title": "연구의 배경 및 목적",
    "bg.p1":
      "언어는 사회문화적 맥락을 내포하는 매체로서, <strong>'시각적 이미지'</strong>를 매개로 할 때 더욱 직관적으로 소통될 수 있다. <strong>비언어적 요소</strong>인 이미지, 표정, 몸짓 등 <strong>시각적 자극</strong>은 텍스트나 음성보다 문화적 뉘앙스를 효과적으로 전달하며(1), 이미지 기반 인터랙션이 결합된 UX 공간은 사용자에게 감각적 체험(본능적 층위)부터 의미 있는 사회적 관계 형성(반성적 층위)까지 다층적 감성 경험을 창출할 수 있다(2).",
    "bg.p2":
      "본 연구는 <strong>이미지 매개 상호작용이라는 새로운 소셜 인터랙션 기제가 학습자의 감성 경험에 미치는 영향</strong>에 주목한다.",
    "bg.note1": "(1) 박동진·박성은(2024) 비언어적 요소의 언어 소통에 대한 영향력 연구. KCI ART003163539",
    "bg.note2": "(2) 이승연(2012) 사용자 경험을 위한 인터랙션 공간디자인 표현에 관한 연구. KCI ART001690380",
    "slogan.text":
      "LEAP은 '공부가 아니라 놀이처럼 배우기'라는 철학을 가진<br /><strong>이미지 기반 단어 사전을 공유하는 소셜 플랫폼</strong>입니다.",
    "design.title": "디자인",
    "design.text":
      "본 연구에서 제안하는 소셜 네트워크 기반 언어 학습 서비스는 <strong>AI 기반의 객체·맥락 데이터 분석 기술과 소셜 미디어의 유기적인 인터랙션을 결합</strong>하여, 학습자의 자발적 참여와 지속 사용 의도를 향상시키는 것을 목적으로 설계되었다. 본 서비스의 전반적인 사용자 여정 및 인터페이스 흐름은 다음과 같이 네 가지 핵심 단계로 구성된다.",
    "step1.title": "진입 및 메인 홈 화면 탐색 단계",
    "step1.text":
      "사용자가 앱에 진입하면 최초 학습하고자 하는 목표 언어를 선택하게 된다. 이후 <strong>\"공부가 아니라 놀이같은 학습\"</strong>이라는 서비스 철학에 따라, 정형화된 학습 리스트 대신 타 사용자들이 공유한 일상적인 이미지 파일들로 구성된 인스타그램 스타일의 아카이빙 피드가 홈 화면으로 제시된다. 사용자는 스크롤을 통해 피드를 자유롭게 탐색하고 개별 포스팅을 확인할 수 있다.",
    "step2.title": "AI 기반 이미지 매핑 및<br />단어장 생성 단계",
    "step2.text":
      "사용자가 하단의 '+' 버튼을 눌러 직접 사진을 촬영하거나 기존 이미지를 로드하면, 생성형 AI 기술이 <strong>이미지 내 객체와 맥락을 실시간으로 분석하여 관련 외국어 키워드들을 추출·제시</strong>한다. 사용자가 제시된 키워드 중 학습을 원하는 단어를 선택하면, 해당 단어의 사전적 정의, 예문, 그리고 문화적 유래가 유기적으로 정리되며 사용자 개인의 맞춤형 단어장에 자동으로 아카이빙되는 구조를 지닌다.",
    "step3.title": "소셜 상호작용 및 검색 단계",
    "step3.text":
      "사용자는 개별 피드에 댓글을 작성하여 단어의 실제 쓰임새나 국가별 문화적 차이에 대해 <strong>글로벌 유저들과 쌍방향으로 소통</strong>할 수 있다. 또한, 검색 기능을 통해 특정 키워드로 포스팅된 다채로운 일상 이미지 피드들을 한눈에 확인하며 <strong>다양한 언어적 맥락을 파악</strong>할 수 있다.",
    "future.title": "<span>연구</span>는 계속됩니다!",
    "future.text": "저의 후속연구에 <strong>함께해 주세요</strong>:)",
    "step4.title": "행동 유도 푸시 알림 단계",
    "step4.text":
      "시스템은 서비스 사용 중간에 두 가지 유형의 <strong>자발적 행동 유도 알림</strong>을 송신한다. 첫 번째는 “지금 주변은 어떤 모습인가요?”, “오늘 하루의 단어를 채워보세요!”와 같이 사용자의 일상 아카이빙 및 콘텐츠 생산을 독려하는 알림이며, 두 번째는 “다른 사람의 피드에 댓글을 달아주세요”와 같이 타 유저와의 소셜 인터랙션을 밀착 유도하는 알림이다.",
  },
  en: {
    "nav.background": "Background & Purpose",
    "nav.design": "Design",
    "nav.future": "Future Research",
    "bg.title": "Research Background & Purpose",
    "bg.p1":
      "As a medium that carries sociocultural context, language can be communicated more intuitively when mediated by <strong>visual images</strong>. <strong>Non-verbal elements</strong> such as images, facial expressions and gestures — that is, <strong>visual stimuli</strong> — convey cultural nuance more effectively than text or speech (1), and a UX space combined with image-based interaction can create multi-layered emotional experiences, from sensory experience (the visceral level) to the formation of meaningful social relationships (the reflective level) (2).",
    "bg.p2":
      "This study focuses on <strong>how image-mediated interaction, a new mechanism of social interaction, affects learners' emotional experience</strong>.",
    "bg.note1":
      "(1) Park, D. J., & Park, S. E. (2024) A Study on the Influence of Nonverbal Elements on Linguistic Communication: Focusing on Visual and Vocal Elements. KCI ART003163539",
    "bg.note2":
      "(2) Lee, S. Y. (2012) A Study on the Expression of Interaction Space Design for User Experience: Focusing on Digital Media. KCI ART001690380",
    "slogan.text":
      "Built on the philosophy of 'learning like play, not study,'<br />LEAP is <strong>a social platform for sharing image-based word dictionaries</strong>.",
    "design.title": "Design",
    "design.text":
      "The social-network-based language learning service proposed in this study <strong>combines AI-based object and context analysis with the organic interactions of social media</strong>, aiming to increase learners' voluntary participation and intention to keep using the service. The overall user journey and interface flow consist of the following four core stages.",
    "step1.title": "Onboarding & Home Feed Exploration",
    "step1.text":
      "On entering the app, users first choose the target language they want to learn. Following the service philosophy of <strong>\"learning like play, not study,\"</strong> the home screen presents an Instagram-style archive feed of everyday images shared by other users instead of a fixed study list. Users can scroll freely through the feed and open individual posts.",
    "step2.title": "AI Image Mapping &<br />Wordbook Creation",
    "step2.text":
      "When users tap the '+' button to take a photo or load an existing image, generative AI <strong>analyzes the objects and context in the image in real time and suggests related foreign-language keywords</strong>. Once a user picks a word to learn, its dictionary definition, example sentences and cultural origin are organized and automatically archived in the user's personal wordbook.",
    "step3.title": "Social Interaction & Search",
    "step3.text":
      "By commenting on individual posts, users can <strong>talk with global users in both directions</strong> about how a word is actually used and how cultures differ. Through search, they can also browse diverse everyday image posts tagged with a keyword at a glance and <strong>grasp a variety of linguistic contexts</strong>.",
    "future.title": "<span>The research</span> goes on!",
    "future.text": "Please <strong>join my follow-up research</strong> :)",
    "step4.title": "Action-Prompting Push Notifications",
    "step4.text":
      "While the service is in use, the system sends two types of <strong>notifications that prompt voluntary action</strong>. The first, such as “What does it look like around you right now?” or “Fill in today's word!”, encourages users to archive their daily lives and create content; the second, such as “Leave a comment on someone else's feed,” closely encourages social interaction with other users.",
  },
};

function setLanguage(lang) {
  const dict = I18N[lang];
  if (!dict) return;

  document.documentElement.lang = lang;
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const text = dict[el.dataset.i18n];
    if (text) el.textContent = text;
  });
  document.querySelectorAll("[data-i18n-html]").forEach((el) => {
    const html = dict[el.dataset.i18nHtml];
    if (html) el.innerHTML = html;
  });

  document.querySelector(".lang__current").textContent = lang === "ko" ? "KOR" : "ENG";
  document.querySelectorAll(".lang__option").forEach((opt) => {
    opt.classList.toggle("is-active", opt.dataset.lang === lang);
  });
}

// ---------- Language dropdown ----------
const langEl = document.querySelector("[data-lang-dropdown]");
const langToggle = langEl.querySelector(".lang__toggle");

function setDropdown(open) {
  langEl.classList.toggle("is-open", open);
  langToggle.setAttribute("aria-expanded", String(open));
}

langToggle.addEventListener("click", (e) => {
  e.stopPropagation();
  setDropdown(!langEl.classList.contains("is-open"));
});

langEl.querySelectorAll(".lang__option").forEach((opt) => {
  opt.addEventListener("click", () => {
    setLanguage(opt.dataset.lang);
    setDropdown(false);
  });
});

document.addEventListener("click", (e) => {
  if (!langEl.contains(e.target)) setDropdown(false);
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") setDropdown(false);
});

// ---------- Hero circle: 배경 위를 자유롭게 떠다니는 원 ----------
// viewBox(1920x1080) 좌표 기준. 서로 다른 주기의 사인파를 겹쳐
// 반복이 잘 느껴지지 않는 유영 경로를 만든다. t=0에서는 시안 위치(1648, 220).
(function floatHeroCircle() {
  const circle = document.querySelector(".hero__arc circle");
  if (!circle || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  const START = { x: 1648, y: 220 };
  const CENTER = { x: 960, y: 540 };
  const AMP = { x: 760, y: 420 };
  const TAU = Math.PI * 2;
  const phaseX = Math.asin((START.x - CENTER.x) / AMP.x);
  const phaseY = Math.asin((START.y - CENTER.y) / AMP.y);

  let running = true;
  let elapsed = 0;
  let last = performance.now();

  function frame(now) {
    if (running) elapsed += (now - last) / 1000;
    last = now;

    const t = elapsed;
    const x = CENTER.x + AMP.x * Math.sin((TAU / 46) * t + phaseX) + 90 * Math.sin((TAU / 19) * t);
    const y = CENTER.y + AMP.y * Math.sin((TAU / 33) * t + phaseY) + 70 * Math.sin((TAU / 23) * t);

    circle.setAttribute("cx", x.toFixed(1));
    circle.setAttribute("cy", y.toFixed(1));
    requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);

  // 히어로가 화면 밖이면 멈춤
  new IntersectionObserver(([entry]) => {
    running = entry.isIntersecting;
  }).observe(document.querySelector(".hero"));
})();

// ---------- Section 2: 떨어지는 가로줄 ----------
(function buildBackgroundLines() {
  const section = document.querySelector(".background");
  const wrap = section.querySelector(".background__lines");
  const count = parseInt(getComputedStyle(section).getPropertyValue("--line-count"), 10) || 16;

  for (let i = 0; i < count; i++) {
    const line = document.createElement("span");
    line.className = "background__line";
    line.style.setProperty("--i", i);
    wrap.appendChild(line);
  }
})();

// ---------- 흐르는 배경 (섹션 3 카피, 섹션 4 피드) ----------
// 화면 폭만 한 요소의 background-position을 옮겨 끊김 없이 반복.
// data-dir: -1 오른쪽→왼쪽, 1 왼쪽→오른쪽 / data-ratio: 타일 가로÷세로
// data-duration: 타일 1장만큼 이동하는 시간(s) / data-start: 시작 위치(vw)
(function marquees() {
  const items = [...document.querySelectorAll("[data-marquee]")].map((el) => ({
    el,
    dir: Number(el.dataset.dir),
    ratio: Number(el.dataset.ratio),
    duration: Number(el.dataset.duration),
    offset: (window.innerWidth * Number(el.dataset.start)) / 100,
    visible: true,
  }));
  const render = (it) => {
    it.el.style.backgroundPositionX = `${it.offset}px`;
  };
  items.forEach(render);

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  // 화면 밖이면 멈춤
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      items.find((it) => it.el === entry.target).visible = entry.isIntersecting;
    });
  });
  items.forEach((it) => io.observe(it.el));

  let last = performance.now();
  function frame(now) {
    const dt = Math.min((now - last) / 1000, 0.1);
    last = now;
    items.forEach((it) => {
      const tile = it.el.clientHeight * it.ratio;
      if (!it.visible || !tile) return;
      it.offset = (it.offset + (it.dir * tile * dt) / it.duration) % tile;
      render(it);
    });
    requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);
})();

// ---------- Section 4: 02 화면 캐러셀 ----------
document.querySelectorAll("[data-carousel]").forEach((carousel) => {
  const track = carousel.querySelector(".carousel__track");
  const slides = track.children;
  const prev = carousel.querySelector(".carousel__arrow--prev");
  const next = carousel.querySelector(".carousel__arrow--next");
  const dotsWrap = carousel.querySelector(".carousel__dots");
  let index = 0;

  const dots = Array.from(slides, (_, i) => {
    const dot = document.createElement("button");
    dot.type = "button";
    dot.className = "carousel__dot";
    dot.setAttribute("role", "tab");
    dot.setAttribute("aria-label", `${i + 1}번째 화면`);
    dot.addEventListener("click", () => go(i));
    dotsWrap.appendChild(dot);
    return dot;
  });

  function go(i) {
    index = Math.max(0, Math.min(slides.length - 1, i));
    // 슬라이드 너비 + 간격만큼 이동 (그림자용 여백 때문에 % 대신 px)
    const step = slides[0].offsetWidth + parseFloat(getComputedStyle(track).columnGap || 0);
    track.style.transform = `translateX(${-step * index}px)`;
    dots.forEach((dot, d) => {
      dot.classList.toggle("is-active", d === index);
      dot.setAttribute("aria-selected", String(d === index));
    });
    prev.disabled = index === 0;
    next.disabled = index === slides.length - 1;
  }

  prev.addEventListener("click", () => go(index - 1));
  next.addEventListener("click", () => go(index + 1));
  window.addEventListener("resize", () => go(index));
  go(0);
});

// ---------- Scroll reveal ----------
// 섹션이 절반쯤 보이면 .is-active를 붙여 한 번만 재생
const revealObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-active");
      observer.unobserve(entry.target);
    });
  },
  { threshold: 0.45 }
);
document.querySelectorAll("[data-reveal]").forEach((el) => revealObserver.observe(el));

// ---------- Scroll to top ----------
document.querySelector(".to-top").addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
