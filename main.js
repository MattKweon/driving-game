
var $img = document.querySelector('img');

document.addEventListener('keydown', function (event) {
  if (event.keyCode === 39) {
    $img.className = 'turn-90';
  } else if (event.keyCode === 40) {
    $img.className = 'turn-180';
  } else if (event.keyCode === 37) {
    $img.className = 'turn-270';
  } else if (event.keyCode === 38) {
    $img.className = '';
  }
  if (event.key === ' ') {
    var pos = 0;
    setInterval(function () {
      $img.style.left = pos + 'rem';
      pos += 1;
    }, 16);
  }
});
