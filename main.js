
var $img = document.querySelector('img');
var angle = 0;

document.addEventListener('keydown', function (event) {
  angle += 90;
  if (event.keyCode === 39) {
    $img.rotate(angle);
  } else if (event.keyCode === 37) {
    $img.style.transform = 'rotate(';
  }
});
