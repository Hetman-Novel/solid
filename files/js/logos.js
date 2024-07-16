document.addEventListener('DOMContentLoaded', () => {
  const logosContainer = document.querySelector('.application-of-english__logos');
  if (logosContainer) {
    const originalLogos = logosContainer.children;
    const numberOfCopies = 32;
    const totalLogos = originalLogos.length;

    for (let i = 0; i < numberOfCopies - 1; i++) {
      for (let j = 0; j < totalLogos; j++) {
        const clone = originalLogos[j].cloneNode(true);
        logosContainer.appendChild(clone);
      }
    }
  }
});