document.addEventListener("DOMContentLoaded", () => {
  const textElements = document.querySelectorAll(
    "#About .about_section2 .text"
  );

  const observerOptions = {
    threshold: 0.6, // Adjust this threshold based on when you want the animation to start
  };

  const observerCallback = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      } else {
        entry.target.classList.remove("visible");
      }
    });
  };

  const observer = new IntersectionObserver(observerCallback, observerOptions);

  textElements.forEach((element) => observer.observe(element));
});
