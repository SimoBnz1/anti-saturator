export function calculateEnergy() {
  const ranges = document.querySelectorAll("#cardQuiz input[type='range']");
  if (ranges.length === 0) {
    console.warn("Quiz inputs not found");
    return 5; 
  }

  let sum = 0;
  ranges.forEach(range => sum += Number(range.value));

  return sum / ranges.length;
}