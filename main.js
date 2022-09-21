
var $img = document.querySelector('img');

document.addEventListener('keydown', function (event) {
  if (event.keyCode === 39) {
    $img.style.transform = 'rotate(90deg)';
  } else if (event.keyCode === 40) {
    $img.style.transform = 'rotate(180deg)';
  } else if (event.keyCode === 37) {
    $img.style.transform = 'rotate(270deg)';
  } else if (event.keyCode === 38) {
    $img.style.transform = 'rotate(360deg)';
  }
});
