const form = document.querySelector('form');
const inputField = document.getElementById('input');
const outputDiv = document.getElementById('output');
let maxCount = 0;
let minCount = Infinity;
let maxChar = '';
let minChar = '';

form.addEventListener('submit', event => {
  event.preventDefault();
  const str = inputField.value;
  const counts = new Map();
  
  for (const ch of str) {
    const count = counts.get(ch) ?? 0;
    counts.set(ch, count + 1);
    if (count + 1 > maxCount) {
      maxCount = count + 1;
      maxChar = ch;
    }
    if (count + 1 < minCount) {
      minCount = count + 1;
      minChar = ch;
    }
  }
  
  outputDiv.innerHTML = '';
  for (const [ch, count] of counts) {
    const p = document.createElement('p');
    p.textContent = `"${ch}" count: ${counts.get(ch)}`;
    outputDiv.appendChild(p);
  }
  
  const maxP = document.createElement('p');
  maxP.textContent = `Most common letter: "${maxChar}" (count: ${maxCount})`;
  outputDiv.appendChild(maxP);
  
  const minP = document.createElement('p');
  minP.textContent = `Least common letter: "${minChar}" (count: ${minCount})`;
  outputDiv.appendChild(minP);
});
