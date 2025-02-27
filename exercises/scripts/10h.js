function handleCostKeydown(event) {
  if(event.key === 'Enter') {
    calculateTotal();
  }
};

/* works the same but not the answer he was looking for

function calculateTotal() {
  const inputElement = document.querySelector('.js-cost-input');

  let cost = Number(inputElement.value);
  let totalCost = document.querySelector('.js-total-cost');

  if (cost < 0){
    totalCost.style.color = 'red';
    totalCost.innerHTML = `Error: cost cannot be less than $0`
  } else if (cost < 40) {
    cost = (cost * 100 + 1000)/100;

    totalCost.innerHTML =`$${cost}`;
  }

};

*/ 

function calculateTotal() {
  const inputElement = document.querySelector('.js-cost-input');
  let cost = Number(inputElement.value);

  document.querySelector('.js-total-cost')
    .innerHTML = '';
  document.querySelector('.js-error-message')
    .innerHTML = '';

  if (cost < 0) {
    document.querySelector('.js-error-message')
      .innerHTML = 'Error: cost cannot be less than $0';
    // If we display an error, we can use return to
    // end this function immediately. This is called
    // an "early return" and it makes the code cleaner
    // because it reduces nesting / indents.
    return;
  }

  if (cost < 40) {
    cost = (cost * 100 + 1000)/100;
  }

  document.querySelector('.js-total-cost')
    .innerHTML = `$${cost}`;
};
