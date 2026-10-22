(() => {
  "use strict";

  if (!("ResizeObserver" in window)) return;

  document.querySelectorAll(".personal-photo-grid--editorial").forEach((grid) => {
    grid.closest(".container")?.classList.add("personal-photography-container");
    let frame = 0;
    const photos = Array.from(grid.querySelectorAll(".personal-photo"));

    function arrange() {
      frame = 0;
      if (!grid.getBoundingClientRect().width) return;
      grid.classList.add("is-arranged");
      const styles = getComputedStyle(grid);
      const rowHeight = parseFloat(styles.gridAutoRows);
      const gap = parseFloat(styles.rowGap);

      photos.forEach((photo) => {
        const height = photo.getBoundingClientRect().height;
        const span = Math.max(1, Math.ceil((height + gap) / (rowHeight + gap)));
        const placement = `span ${span}`;
        if (photo.style.gridRowEnd !== placement) photo.style.gridRowEnd = placement;
      });
    }

    function schedule() {
      if (!frame) frame = requestAnimationFrame(arrange);
    }

    const observer = new ResizeObserver(schedule);
    observer.observe(grid);
    photos.forEach((photo) => observer.observe(photo));
    grid.querySelectorAll("img").forEach((img) => {
      img.addEventListener("load", schedule);
      img.addEventListener("error", schedule);
    });
    if (document.fonts) document.fonts.ready.then(schedule);
    schedule();
  });
})();
