document.querySelectorAll("[data-figure-gallery]").forEach((gallery) => {
  const slides = Array.from(gallery.querySelectorAll("[data-figure-slide]"));
  const controls = gallery.querySelector("[data-figure-controls]");
  const status = gallery.querySelector("[data-figure-status]");
  let current = 0;
  let touchStart;

  function show(index) {
    const previous = slides[current];
    const moveFocus = previous.contains(document.activeElement);
    current = (index + slides.length) % slides.length;
    slides.forEach((slide, position) => {
      slide.hidden = position !== current;
    });
    status.textContent = `${current + 1} of ${slides.length}`;
    status.setAttribute("aria-label", `Figure ${slides[current].dataset.figureNumber}, ${status.textContent}`);
    if (moveFocus) {
      slides[current].querySelector("[data-figure-advance]").focus({ preventScroll: true });
    }
  }

  if (slides.length < 2) return;

  slides.forEach((slide) => {
    const image = slide.querySelector("[data-figure-advance]");
    image.disabled = false;
    image.addEventListener("click", () => show(current + 1));
  });
  gallery.querySelector("[data-figure-previous]").addEventListener("click", () => show(current - 1));
  gallery.querySelector("[data-figure-next]").addEventListener("click", () => show(current + 1));
  gallery.addEventListener("keydown", (event) => {
    if (event.altKey || event.ctrlKey || event.metaKey || event.shiftKey) return;
    if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") return;
    event.preventDefault();
    show(current + (event.key === "ArrowRight" ? 1 : -1));
  });
  gallery.addEventListener(
    "touchstart",
    (event) => {
      touchStart =
        event.touches.length === 1 && event.target.closest("[data-figure-advance]")
          ? { x: event.touches[0].clientX, y: event.touches[0].clientY }
          : null;
    },
    { passive: true }
  );
  gallery.addEventListener("touchcancel", () => {
    touchStart = null;
  });
  gallery.addEventListener(
    "touchend",
    (event) => {
      if (!touchStart || event.touches.length) return;
      const { clientX, clientY } = event.changedTouches[0];
      const dx = clientX - touchStart.x;
      const dy = clientY - touchStart.y;
      touchStart = null;
      if (Math.abs(dx) < 45 || Math.abs(dx) < Math.abs(dy) * 1.4) return;
      if (event.cancelable) event.preventDefault();
      show(current + (dx < 0 ? 1 : -1));
    },
    { passive: false }
  );

  gallery.setAttribute("data-enhanced", "");
  controls.hidden = false;
  show(0);
});
