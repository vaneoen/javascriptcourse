let calculation = localStorage.getItem('calculation') || '';

displayCalculation(calculation);

function updateCalculation (value) {
    calculation += value;
    displayCalculation();
    localStorage.setItem ('calculation', calculation);
  };

localStorage.setItem('calculation', calculation);

function  displayCalculation (){
  document.querySelector('.js-calculation')
    .innerHTML = calculation;
};


/* you can use a function to reuse the code
function saveCalculation () {
localStorage.setItem('calculation', calculation);
};
*/ 
