const decreaseButton = document.getElementById('decrease');
const increaseButton = document.getElementById('increase');
const numberElement = document.getElementById('number');
const feeElement = document.getElementById('fee');
const openBtn = document.getElementById('open')
const close = document.getElementById('close-btn');
const popUp = document.querySelector('.alert-Container');

let numberValue = 1; // İlk değer
let feeNmbr = 155;

function updateNumber(value) {
  numberValue = value;
  numberElement.textContent = numberValue;
}
function updateFee(value) {
  feeNmbr = value;
  feeElement.textContent = feeNmbr;
}
decreaseButton.addEventListener('click', () => {
  updateNumber(numberValue - 1);
  updateFee(feeNmbr - 155);
});

increaseButton.addEventListener('click', () => {
  updateNumber(numberValue + 1);

  updateFee(feeNmbr + 155);
});


openBtn.addEventListener('click', ()=>{
    popUp.style.display = 'block'
});

close.addEventListener('click', e=>{
    if( popUp.style.display = 'block'){
      popUp.style.display = 'none'
    }
})
