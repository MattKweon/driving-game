var $img = document.querySelector('img');
var right = 'd';

document.onkeydown(function (event) {
  if (event.key === right) {
    $img.className = 'turn-right';
    // console.log('key pressed');
  }
});
