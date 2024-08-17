const input = document.getElementById('inputNum');
const output = document.getElementById('output');

input.addEventListener('input', () => {
  const num = Number(input.value);

  // If the input is not empty, add the 'active' class to change border color
  if (input.value !== "") {
    input.classList.add('active');
  } else {
    input.classList.remove('active');
  }

  // If the user enters a negative number, show "enter a positive value".
  if (num < 0) {
    output.textContent = "enter a positive value";
  } 

  // If the user enters an even number, show the next 3 even numbers.
  else if (num % 2 === 0) {
    const evenNumbers = [];
    for (let i = num + 2; evenNumbers.length < 3; i += 2) {
      evenNumbers.push(i);
    }
    output.textContent = `${evenNumbers.join(', ')}`;
  } 

  // If the user enters an odd number, show the next 3 odd numbers.
  else {
    const oddNumbers = [];
    for (let i = num + 2; oddNumbers.length < 3; i += 2) {
      oddNumbers.push(i);
    }
    output.textContent = `${oddNumbers.join(', ')}`;
  }
});
