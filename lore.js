const header = document.getElementById('individual-letters');
const text = header.textContent;
const letters = text.split('');

const spannedText = letters
  .map(letter => `<span>${letter}</span>`)
  .join('');
header.innerHTML = spannedText;

const circles = document.querySelectorAll('.circle');

circles.forEach(circle => {
  circle.addEventListener('mouseover', () => {
    const newX = Math.random() * (window.innerWidth - circle.offsetWidth);
    const newY = Math.random() * (window.innerHeight - circle.offsetHeight);

    circle.style.transform = `translate(${newX}px, ${newY}px)`;
  });
});