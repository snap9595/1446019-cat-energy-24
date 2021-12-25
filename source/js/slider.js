const input = document.querySelector('.slider__range');
const buttons = document.querySelectorAll('.slider__button');
const comparison = document.querySelector('.slider');

input.addEventListener('input', function (evt) {
  const value = (100 - input.value) + '%';
  comparison.style.setProperty('--comparison', value);
})

for (btn of buttons) {
  btn.addEventListener('click', (evt) => {
    const btnDataValue = evt.target.dataset.value
    console.log(evt.target.dataset.value);
    if (btnDataValue > 0) {
      comparison.style.setProperty('--left', '35px');
    } else {
      comparison.style.setProperty('--left', '0');
    }
    comparison.style.setProperty('--comparison', btnDataValue);
    input.value = btnDataValue;
  })
}
