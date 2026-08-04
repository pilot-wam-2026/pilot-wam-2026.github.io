/* ================================================================= PILOT demo — main.js */
(function () {
  "use strict";

  /* ------------------------------------------------------------------ theme toggle */
  const saved = localStorage.getItem("pilot-theme");
  if (saved) document.documentElement.setAttribute("data-theme", saved);

  const toggle = document.querySelector(".theme-toggle");
  if (toggle) {
    toggle.addEventListener("click", function () {
      const next =
        document.documentElement.getAttribute("data-theme") === "dark"
          ? "light"
          : "dark";
      document.documentElement.setAttribute("data-theme", next);
      localStorage.setItem("pilot-theme", next);
    });
  }

  /* ------------------------------------------------------------------ scroll progress bar */
  const bar = document.querySelector(".progress-bar");
  if (bar) {
    window.addEventListener("scroll", function () {
      const h = document.documentElement;
      const pct =
        (h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100;
      bar.style.width = pct + "%";
    }, { passive: true });
  }

  /* ------------------------------------------------------------------ nav scroll effect */
  const nav = document.querySelector(".nav");
  if (nav) {
    window.addEventListener("scroll", function () {
      nav.classList.toggle("is-scrolled", window.scrollY > 10);
    }, { passive: true });
  }

  /* ------------------------------------------------------------------ scroll reveal (IntersectionObserver) */
  const reveals = document.querySelectorAll(".reveal");
  if (reveals.length) {
    const io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    reveals.forEach(function (el) { io.observe(el); });
  }

  /* ------------------------------------------------------------------ blob visibility */
  const blobs = document.querySelectorAll(".blob");
  if (blobs.length) {
    const bio = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting) {
            e.target.classList.add("is-vis");
            bio.unobserve(e.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    blobs.forEach(function (b) { bio.observe(b); });
  }

  /* ------------------------------------------------------------------ video lazy-load via IntersectionObserver */
  function initVideoLazyLoad() {
    var videos = document.querySelectorAll("video[data-src]");
    if (!videos.length) return;

    var vio = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (e) {
          var vid = e.target;
          if (e.isIntersecting && vid.dataset.src) {
            vid.src = vid.dataset.src;
            delete vid.dataset.src;
            vid.load();
            vid.play().catch(function () {});
          }
          // pause when out of viewport, resume when back
          if (!e.isIntersecting && vid.readyState >= 2) {
            vid.pause();
          } else if (e.isIntersecting && vid.readyState >= 2 && vid.paused) {
            vid.play().catch(function () {});
          }
        });
      },
      { rootMargin: "100px 0px", threshold: 0.05 }
    );
    videos.forEach(function (v) { vio.observe(v); });
  }
  initVideoLazyLoad();

  /* ------------------------------------------------------------------ ablation-bar animation */
  function initAblationBars() {
    var barWrappers = document.querySelectorAll(".ablation-bar");
    if (!barWrappers.length) return;

    var aio = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting) {
            var wrapper = e.target;
            var pct = wrapper.getAttribute("data-target");
            var fill = wrapper.querySelector(".ablation-fill");
            if (pct && fill) {
              fill.style.width = pct + "%";
            }
            aio.unobserve(wrapper);
          }
        });
      },
      { threshold: 0.2 }
    );
    barWrappers.forEach(function (b) { aio.observe(b); });
  }
  initAblationBars();

  /* ------------------------------------------------------------------ lightbox */
  var lbOverlay = document.querySelector(".lightbox");
  var lbClose = document.querySelector(".lightbox-close");
  var lbImg = document.querySelector(".lightbox-img");

  function openLightbox(src) {
    if (!lbOverlay || !lbImg) return;
    lbImg.src = src;
    lbOverlay.classList.add("is-open");
    lbOverlay.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }

  function closeLightbox() {
    if (!lbOverlay) return;
    lbOverlay.classList.remove("is-open");
    lbOverlay.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }

  // open on zoom click
  document.addEventListener("click", function (e) {
    var img = e.target.closest("img[data-zoom]");
    if (img) {
      e.preventDefault();
      openLightbox(img.src);
    }
  });

  // close
  if (lbClose) lbClose.addEventListener("click", closeLightbox);
  if (lbOverlay) {
    lbOverlay.addEventListener("click", function (e) {
      if (e.target === lbOverlay) closeLightbox();
    });
  }
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") closeLightbox();
  });

  /* ------------------------------------------------------------------ bibtex copy */
  var copyBtn = document.querySelector(".btn-copy");
  if (copyBtn) {
    copyBtn.addEventListener("click", function () {
      var pre = this.closest(".bibtex-wrap").querySelector("pre");
      if (!pre) return;
      var text = pre.textContent;
      navigator.clipboard.writeText(text).then(
        function () {
          copyBtn.classList.add("is-copied");
          copyBtn.innerHTML = "Copied!";
          setTimeout(function () {
            copyBtn.classList.remove("is-copied");
            copyBtn.innerHTML =
              '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/></svg> Copy';
          }, 2000);
        },
        function () {
          // fallback
          var ta = document.createElement("textarea");
          ta.value = text;
          document.body.appendChild(ta);
          ta.select();
          document.execCommand("copy");
          document.body.removeChild(ta);
          copyBtn.classList.add("is-copied");
          copyBtn.textContent = "Copied!";
          setTimeout(function () {
            copyBtn.classList.remove("is-copied");
            copyBtn.textContent = "Copy";
          }, 2000);
        }
      );
    });
  }
})();