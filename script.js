function loadBigFoot() {
  let bigFoot = document.getElementById("bigFoot");
  bigFoot.setAttribute("src", "bigfoot.png");
}

function moveBigFoot() {
  alert('Woohoo, you win! You found bigfoot!');
  let bigFoot = document.getElementById("bigFoot");

  let x = Math.random() * window.innerHeight;
  let y = Math.random() * window.innerWidth;

  bigFoot.style.top = x + 'px';
  bigFoot.style.left = y + 'px';
}
