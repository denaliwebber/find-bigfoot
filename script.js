// is called after page has loaded to ensure the bigfoot image doesn't appear first
function loadBigFoot() {
  let bigFoot = document.getElementById("bigFoot");
  bigFoot.setAttribute("src", "bigfoot.png");
}

// alerts user they have found bigfoot and moves image to new random location
function moveBigFoot() {
  alert('Woohoo, you win! You found bigfoot!');
  let bigFoot = document.getElementById("bigFoot");

  let x = Math.random() * window.innerHeight;
  let y = Math.random() * window.innerWidth;

  bigFoot.style.top = x + 'px';
  bigFoot.style.left = y + 'px';
}
