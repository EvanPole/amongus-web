var player = document.getElementById("player");
var map = document.getElementById("container");
var posx, posy;

player.style.top = "500px";
player.style.left = "1300px";

const step = 25;

const activeKeys = {};

document.addEventListener("keydown", function(event) {
  activeKeys[event.key] = true;
  updatePlayerPosition();
});

document.addEventListener("keyup", function(event) {
  delete activeKeys[event.key];
  updatePlayerPosition();
});

function updatePlayerPosition() {
  let posx = player.offsetLeft;
  let posy = player.offsetTop;

  if (activeKeys["z"]) {
    posy -= step;
  }
  if (activeKeys["s"]) {
    posy += step;
  }
  if (activeKeys["q"]) {
    posx -= step;
  }
  if (activeKeys["d"]) {
    posx += step;
  }

  // Update the player's position
  player.style.top = posy + "px";
  player.style.left = posx + "px";
}
