document.addEventListener("DOMContentLoaded", function () {
  const container = document.getElementById("container");
  const transitionArea = document.getElementById("transitionArea");
  const background1 = document.getElementById("background1");
  const background2 = document.getElementById("background2");
  const backgroundText = document.getElementById("backgroundText");
  const txtAdventure = document.getElementById("txtAdventure");

  if (
    !container ||
    !transitionArea ||
    !background1 ||
    !background2 ||
    !backgroundText ||
    !txtAdventure
  ) {
    console.error(
      "Ein oder mehrere Elemente wurden nicht gefunden. Überprüfen Sie die IDs in Ihrem HTML."
    );
    return;
  }

  function onScroll() {
    const containerRect = container.getBoundingClientRect();
    const transitionAreaRect = transitionArea.getBoundingClientRect();
    const viewportHeight = window.innerHeight;

    const scrollProgress = Math.min(
      Math.max(
        (window.scrollY - transitionArea.offsetTop) /
          (transitionArea.offsetHeight - viewportHeight),
        0
      ),
      1
    );

    if (
      transitionAreaRect.top <= 0 &&
      transitionAreaRect.bottom >= viewportHeight
    ) {
      container.style.position = "fixed";
      container.style.top = "0";
    } else if (transitionAreaRect.bottom < viewportHeight) {
      container.style.position = "absolute";
      container.style.top =
        transitionArea.offsetHeight - container.offsetHeight + "px";
    } else if (transitionAreaRect.top > 0) {
      container.style.position = "relative";
      container.style.top = "0";
    }

    if (scrollProgress >= 0.1 && scrollProgress <= 0.9) {
      const sizeProgress = (scrollProgress - 0.1) / 0.8;
      const fontSizeValue = 20 + sizeProgress * 1000; // 20vw to 1000vw
      txtAdventure.style.fontSize = `${fontSizeValue}vw`;
      txtAdventure.style.visibility = "visible";
      background2.style.visibility = "hidden";
    } else if (scrollProgress < 0.1) {
      txtAdventure.style.fontSize = "20vw";
      txtAdventure.style.visibility = "visible";
      background2.style.visibility = "hidden";
    } else if (scrollProgress > 0.9) {
      txtAdventure.style.fontSize = "1000vw";
      txtAdventure.style.visibility = "hidden";
      background2.style.visibility = "visible";
    }
  }

  window.addEventListener("scroll", onScroll);
  onScroll();
});
