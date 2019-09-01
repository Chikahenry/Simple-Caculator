
// initialization
let button = document.querySelectorAll('.button');
let display = document.querySelector('.output');
let holder = 0;
let obj = null;

const operators = {
  '−': ' - ',
  '×': ' * ',
  '÷': ' / ',
  '+': ' + ',
};


// looping through the buttons
for (btn in button) {
  button[btn].onclick = function (event) {
    let input = event.target.innerText;
    let number = parseInt(input);

// if btn is not an integer
    if (isNaN(number)) {

      // if btn is C "clear"
      if (input === 'C') {
        obj = null;
        holder = 0;
        display.innerText = 0;
      } 

      // operation
      else
      {
        if (obj && obj !== '=') {
          let operation = holder + operators[obj] + display.innerText;
          display.innerText = eval(operation);
        }
        holder = parseInt(display.innerText);
        obj = input;
      }
    } 

    // if btn is an integer
    else
    {
      if (holder === parseInt(display.innerText)) {
        display.innerText = number;
      } 
      else 
      {
        display.innerText += number;
      }
    }
   
  };
}

