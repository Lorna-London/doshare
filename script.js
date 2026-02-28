let root = document.querySelector(':root');
let moon = document.querySelector('.moon-icon');
let amount = document.querySelector('.amount');
let total = document.querySelector('.total-input');
let people = document.querySelector('.people-input')

let calculate = document.querySelector('.calc-btn');

calculate.addEventListener('click', function(e) {
e.preventDefault();
  amount.textContent = '£';
  let billAmount = total.value / people.value;
  let decimalBillAmount = billAmount.toFixed(2); 
    amount.append(decimalBillAmount);
    console.log(decimalBillAmount);
    if(amount.textContent === '£NaN') {
      amount.textContent = "";
    }
});

moon.addEventListener('click', function() {
  root.style.setProperty('--themecolor', 'magenta'), moon.addEventListener('click', function() {
  root.style.setProperty('--themecolor', 'chartreuse'), moon.addEventListener('click', function() {
    root.style.setProperty('--themecolor', 'orange'), moon.addEventListener('click', function() {
      root.style.setProperty('--themecolor', 'deepskyblue'), moon.addEventListener('click', function() {
        root.style.setProperty('--themecolor', 'cyan');
        })
      })
    })
  })
})

  